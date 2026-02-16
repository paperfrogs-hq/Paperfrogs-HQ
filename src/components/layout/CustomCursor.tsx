import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type CursorKind = "interactive" | "label" | "text";

type CursorMeta = {
  kind: CursorKind;
  labelLines: string[];
  scale: number;
};

const CURSOR_LERP = 0.34;
const HALO_SCALE_LERP = 0.3;
const HALO_OPACITY_LERP = 0.28;
const SCALE_LERP_PRESSED = 0.46;
const HALO_BASE_SCALE = 0.85;
const LABEL_OFFSET = 14;

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button:not(:disabled)",
  "summary",
  "label[for]",
  "[role='button']:not([aria-disabled='true'])",
  "[data-cursor-label]",
  "[data-cursor-scale]",
  "input:not([type='hidden']):not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
].join(", ");

const TEXT_INPUT_SELECTOR = [
  "textarea:not(:disabled)",
  "input:not([type='button']):not([type='submit']):not([type='reset']):not([type='checkbox']):not([type='radio']):not([type='range']):not([type='color']):not([type='file']):not([type='image']):not([type='hidden']):not(:disabled)",
  "[contenteditable='true']",
  "[contenteditable='']",
].join(", ");

const getCursorMeta = (target: EventTarget | null): CursorMeta | null => {
  if (!(target instanceof Element)) {
    return null;
  }

  if (target.closest(TEXT_INPUT_SELECTOR)) {
    return {
      kind: "text",
      labelLines: [],
      scale: 1,
    };
  }

  const region = target.closest<HTMLElement>("[data-cursor-label]");
  if (!region?.dataset.cursorLabel) {
    const interactiveRegion = target.closest<HTMLElement>(INTERACTIVE_SELECTOR);
    if (!interactiveRegion) {
      return null;
    }

    const parsedScale = Number(interactiveRegion.dataset.cursorScale ?? "1");
    const interactiveScale = Number.isFinite(parsedScale) ? Math.max(parsedScale * 1.85, 1.8) : 1.8;

    return {
      kind: "interactive",
      labelLines: [],
      scale: interactiveScale,
    };
  }

  const labelLines = region.dataset.cursorLabel
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 3);

  if (!labelLines.length) {
    return null;
  }

  const parsedScale = Number(region.dataset.cursorScale ?? "1");
  const scale = Number.isFinite(parsedScale) ? Math.max(parsedScale * 2.25, 2.2) : 2.2;

  return {
    kind: "label",
    labelLines,
    scale,
  };
};

export const CustomCursor = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [isInteractiveHover, setIsInteractiveHover] = useState(false);
  const [labelLines, setLabelLines] = useState<string[]>([]);

  const haloRef = useRef<HTMLDivElement | null>(null);
  const labelAnchorRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const currentHaloScaleRef = useRef(HALO_BASE_SCALE);
  const currentHaloOpacityRef = useRef(0.45);
  const isPointerActiveRef = useRef(false);
  const isPointerDownRef = useRef(false);
  const isCursorSuppressedRef = useRef(false);
  const cursorMetaRef = useRef<CursorMeta | null>(null);

  const isEnabled = isFinePointer && !shouldReduceMotion;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const query = window.matchMedia("(pointer: fine)");
    const onChange = () => setIsFinePointer(query.matches);
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.body.classList.remove("pf-cursor-enabled");
      setIsLabelVisible(false);
      setIsInteractiveHover(false);
      return;
    }

    document.body.classList.add("pf-cursor-enabled");

    const haloEl = haloRef.current;
    const labelAnchorEl = labelAnchorRef.current;
    if (!haloEl || !labelAnchorEl) {
      return;
    }

    const applyMeta = (meta: CursorMeta | null) => {
      cursorMetaRef.current = meta;
      isCursorSuppressedRef.current = meta?.kind === "text";
      setIsInteractiveHover(meta?.kind === "interactive" || meta?.kind === "label");

      if (meta?.kind === "label") {
        setLabelLines(meta.labelLines);
        setIsLabelVisible(true);
        return;
      }

      setIsLabelVisible(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      targetXRef.current = event.clientX;
      targetYRef.current = event.clientY;
      if (!isPointerActiveRef.current) {
        isPointerActiveRef.current = true;
        currentXRef.current = event.clientX;
        currentYRef.current = event.clientY;
      }
    };

    const onMouseOver = (event: MouseEvent) => {
      applyMeta(getCursorMeta(event.target));
    };

    const onMouseOut = (event: MouseEvent) => {
      if (!(event.relatedTarget instanceof Element)) {
        applyMeta(null);
        return;
      }

      applyMeta(getCursorMeta(event.relatedTarget));
    };

    const onMouseDown = () => {
      isPointerDownRef.current = true;
    };

    const onMouseUp = () => {
      isPointerDownRef.current = false;
    };

    const onWindowLeave = () => {
      isPointerActiveRef.current = false;
      setIsLabelVisible(false);
      setIsInteractiveHover(false);
    };

    const onWindowEnter = () => {
      isPointerActiveRef.current = true;
    };

    const tick = () => {
      if (isPointerActiveRef.current && !isCursorSuppressedRef.current) {
        currentXRef.current += (targetXRef.current - currentXRef.current) * CURSOR_LERP;
        currentYRef.current += (targetYRef.current - currentYRef.current) * CURSOR_LERP;

        const meta = cursorMetaRef.current;
        const isHoveringInteractive = meta?.kind === "interactive" || meta?.kind === "label";
        const haloScaleBaseTarget = isHoveringInteractive ? meta.scale : HALO_BASE_SCALE;
        const haloScaleTarget = isPointerDownRef.current ? haloScaleBaseTarget * 0.92 : haloScaleBaseTarget;
        const haloOpacityTarget = isHoveringInteractive ? 0.9 : 0.45;
        const haloScaleLerp = isPointerDownRef.current ? SCALE_LERP_PRESSED : HALO_SCALE_LERP;

        currentHaloScaleRef.current += (haloScaleTarget - currentHaloScaleRef.current) * haloScaleLerp;
        currentHaloOpacityRef.current += (haloOpacityTarget - currentHaloOpacityRef.current) * HALO_OPACITY_LERP;

        const x = currentXRef.current;
        const y = currentYRef.current;

        haloEl.style.opacity = `${currentHaloOpacityRef.current}`;
        haloEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0) scale(${currentHaloScaleRef.current})`;
        labelAnchorEl.style.transform = `translate3d(${x + LABEL_OFFSET}px, ${y + LABEL_OFFSET}px, 0)`;
      } else {
        haloEl.style.opacity = "0";
      }

      rafIdRef.current = window.requestAnimationFrame(tick);
    };

    rafIdRef.current = window.requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("blur", onMouseUp);
    window.addEventListener("mouseleave", onWindowLeave);
    window.addEventListener("mouseenter", onWindowEnter);

    return () => {
      document.body.classList.remove("pf-cursor-enabled");
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("blur", onMouseUp);
      window.removeEventListener("mouseleave", onWindowLeave);
      window.removeEventListener("mouseenter", onWindowEnter);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[120]" aria-hidden="true">
      <div
        ref={haloRef}
        className={cn(
          "absolute h-9 w-9 rounded-full opacity-0 transition-[border-color,background-color,box-shadow] duration-200 ease-out",
          isInteractiveHover
            ? "border border-[hsl(var(--coral)/0.86)] bg-[hsl(var(--coral)/0.2)] shadow-[0_0_24px_hsl(var(--coral)/0.4)]"
            : "border border-[hsl(var(--foreground)/0.5)] bg-[hsl(var(--foreground)/0.08)]",
        )}
        style={{ willChange: "transform, opacity" }}
      />
      <div
        ref={labelAnchorRef}
        className="absolute"
        style={{ willChange: "transform", transform: "translate3d(-9999px, -9999px, 0)" }}
      >
        <div
          className={cn(
            "border border-border bg-[hsl(var(--background)/0.8)] px-3 py-2 text-[13px] font-medium leading-[1.15] text-coral",
            "transition-[opacity,transform] ease-out",
            isLabelVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
          style={{ transitionDuration: isLabelVisible ? "200ms" : "150ms" }}
        >
          {labelLines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
