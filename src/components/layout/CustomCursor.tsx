import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type CursorMeta = {
  labelLines: string[];
  scale: number;
};

const CURSOR_LERP = 0.12;
const SCALE_LERP = 0.18;
const SCALE_LERP_PRESSED = 0.28;
const LABEL_OFFSET = 14;

const getCursorMeta = (target: EventTarget | null): CursorMeta | null => {
  if (!(target instanceof Element)) {
    return null;
  }

  const region = target.closest<HTMLElement>("[data-cursor-label]");
  if (!region?.dataset.cursorLabel) {
    return null;
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
  const scale = Number.isFinite(parsedScale) ? parsedScale : 1;

  return {
    labelLines,
    scale,
  };
};

export const CustomCursor = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [labelLines, setLabelLines] = useState<string[]>([]);

  const followerRef = useRef<HTMLDivElement | null>(null);
  const labelAnchorRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const currentScaleRef = useRef(1);
  const isPointerActiveRef = useRef(false);
  const isPointerDownRef = useRef(false);
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
      return;
    }

    document.body.classList.add("pf-cursor-enabled");

    const followerEl = followerRef.current;
    const labelAnchorEl = labelAnchorRef.current;
    if (!followerEl || !labelAnchorEl) {
      return;
    }

    const applyMeta = (meta: CursorMeta | null) => {
      cursorMetaRef.current = meta;
      if (meta) {
        setLabelLines(meta.labelLines);
        setIsLabelVisible(true);
      } else {
        setIsLabelVisible(false);
      }
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
    };

    const onWindowEnter = () => {
      isPointerActiveRef.current = true;
    };

    const tick = () => {
      if (isPointerActiveRef.current) {
        currentXRef.current += (targetXRef.current - currentXRef.current) * CURSOR_LERP;
        currentYRef.current += (targetYRef.current - currentYRef.current) * CURSOR_LERP;

        const hoverScale = cursorMetaRef.current?.scale ?? 1;
        const scaleTarget = isPointerDownRef.current ? hoverScale * 0.92 : hoverScale;
        const scaleLerp = isPointerDownRef.current ? SCALE_LERP_PRESSED : SCALE_LERP;
        currentScaleRef.current += (scaleTarget - currentScaleRef.current) * scaleLerp;

        const x = currentXRef.current;
        const y = currentYRef.current;

        followerEl.style.opacity = "1";
        followerEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0) scale(${currentScaleRef.current})`;
        labelAnchorEl.style.transform = `translate3d(${x + LABEL_OFFSET}px, ${y + LABEL_OFFSET}px, 0)`;
      } else {
        followerEl.style.opacity = "0";
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
        ref={followerRef}
        className="absolute h-2 w-2 rounded-full bg-[hsl(var(--coral)/0.78)] opacity-0"
        style={{ willChange: "transform, opacity" }}
      />
      <div
        ref={labelAnchorRef}
        className="absolute"
        style={{ willChange: "transform", transform: "translate3d(-9999px, -9999px, 0)" }}
      >
        <div
          className={cn(
            "border border-border bg-[hsl(var(--background)/0.78)] px-3 py-2 text-[13px] font-medium leading-[1.15] text-coral",
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
