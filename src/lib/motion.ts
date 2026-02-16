export const EASING_PRIMARY = [0.22, 1, 0.36, 1] as const;
export const EASING_SECONDARY = "easeOut" as const;

export const MOTION_DURATION = {
  fast: 0.2,
  medium: 0.4,
  standard: 0.6,
  hero: 0.8,
  pageIn: 0.5,
  pageOut: 0.3,
} as const;

export const MOTION_OFFSET = {
  standard: 24,
  large: 40,
  menu: 16,
  page: 16,
} as const;

export const MOTION_STAGGER = {
  heroLine: 0.08,
  menuItem: 0.06,
} as const;

export const VIEWPORT_REVEAL_AMOUNT = 0.15;

export const reducedMotionValue = (isReducedMotion: boolean, value: number) =>
  isReducedMotion ? 0 : value;

export const reducedMotionDuration = (isReducedMotion: boolean, value: number) =>
  isReducedMotion ? 0.2 : value;
