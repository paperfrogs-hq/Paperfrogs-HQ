import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type CursorMeta = {
  interactive: boolean;
  suppress: boolean;
  scale: number;
};

const CURSOR_LERP = 0.5;
const RING_SCALE_LERP = 0.34;
const RING_OPACITY_LERP = 0.3;
const DOT_SCALE_LERP = 0.4;
const PRESSED_SCALE_LERP = 0.5;

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button:not(:disabled)",
  "summary",
  "label[for]",
  "[role='button']:not([aria-disabled='true'])",
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

  const suppress = Boolean(target.closest(TEXT_INPUT_SELECTOR));
  const interactiveRegion = target.closest<HTMLElement>(INTERACTIVE_SELECTOR);
  if (!interactiveRegion) {
    return {
      interactive: false,
      suppress,
      scale: 1,
    };
  }

  const parsedScale = Number(interactiveRegion.dataset.cursorScale ?? "1");
  const scale = Number.isFinite(parsedScale)
    ? Math.min(Math.max(parsedScale * 1.08, 1.08), 1.35)
    : 1.14;
  return {
    interactive: true,
    suppress,
    scale,
  };
};

export const CustomCursor = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isInteractiveHover, setIsInteractiveHover] = useState(false);

  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const currentRingScaleRef = useRef(1);
  const currentDotScaleRef = useRef(1);
  const currentRingOpacityRef = useRef(0.55);
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
      setIsInteractiveHover(false);
      return;
    }

    document.body.classList.add("pf-cursor-enabled");

    const ringEl = ringRef.current;
    const dotEl = dotRef.current;
    if (!ringEl || !dotEl) {
      return;
    }

    const applyMeta = (meta: CursorMeta | null) => {
      cursorMetaRef.current = meta;
      isCursorSuppressedRef.current = Boolean(meta?.suppress);
      setIsInteractiveHover(Boolean(meta?.interactive));
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
        const isHoveringInteractive = Boolean(meta?.interactive);
        const ringScaleBaseTarget = isHoveringInteractive ? (meta?.scale ?? 1.12) : 1;
        const ringScaleTarget = isPointerDownRef.current ? ringScaleBaseTarget * 0.92 : ringScaleBaseTarget;
        const dotScaleTarget = isPointerDownRef.current ? 0.78 : isHoveringInteractive ? 1.08 : 1;
        const ringOpacityTarget = isHoveringInteractive ? 0.78 : 0.55;
        const ringScaleLerp = isPointerDownRef.current ? PRESSED_SCALE_LERP : RING_SCALE_LERP;

        const x = currentXRef.current;
        const y = currentYRef.current;

        currentRingScaleRef.current += (ringScaleTarget - currentRingScaleRef.current) * ringScaleLerp;
        currentDotScaleRef.current += (dotScaleTarget - currentDotScaleRef.current) * DOT_SCALE_LERP;
        currentRingOpacityRef.current += (ringOpacityTarget - currentRingOpacityRef.current) * RING_OPACITY_LERP;

        ringEl.style.opacity = `${currentRingOpacityRef.current}`;
        ringEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0) scale(${currentRingScaleRef.current})`;
        dotEl.style.opacity = "0.9";
        dotEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0) scale(${currentDotScaleRef.current})`;
      } else {
        ringEl.style.opacity = "0";
        dotEl.style.opacity = "0";
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
        ref={ringRef}
        className={cn(
          "absolute h-7 w-7 rounded-full opacity-0 transition-[border-color,background-color] duration-200 ease-out",
          isInteractiveHover
            ? "border border-[hsl(var(--coral)/0.7)] bg-[hsl(var(--coral)/0.12)]"
            : "border border-[hsl(var(--foreground)/0.35)] bg-[hsl(var(--foreground)/0.04)]",
        )}
        style={{ willChange: "transform, opacity" }}
      />
      <div
        ref={dotRef}
        className={cn(
          "absolute h-1.5 w-1.5 rounded-full opacity-0 transition-colors duration-200 ease-out",
          isInteractiveHover ? "bg-coral" : "bg-foreground/80",
        )}
        style={{ willChange: "transform, opacity" }}
      />
    </div>
  );
};
