import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { siteMeta } from "@/data/site";

type MenuItem = { label: string; to: string };
type MenuOverlayProps = { open: boolean; onOpenChange: (v: boolean) => void; items: MenuItem[] };

const EASING = [0.22, 1, 0.36, 1] as const;

export const MenuOverlay = ({ open, onOpenChange, items }: MenuOverlayProps) => {
  const rm = useReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: rm ? 0.1 : 0.3, ease: "easeOut" }}
                className="fixed inset-0 z-[70] bg-[hsl(0,0%,3%)]/96 backdrop-blur-2xl"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: rm ? 0 : -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: rm ? 0 : -20 }}
                transition={{ duration: rm ? 0.15 : 0.45, ease: EASING }}
                className="fixed inset-0 z-[80] flex flex-col overflow-hidden"
              >
                <Dialog.Title className="sr-only">Site Navigation</Dialog.Title>
                <Dialog.Description className="sr-only">Navigate Paperfrogs HQ pages.</Dialog.Description>

                <div className="flex shrink-0 items-center justify-between px-5 py-4 sm:px-10 sm:py-5 lg:px-16">
                  <Link
                    to="/"
                    onClick={() => onOpenChange(false)}
                    aria-label="Paperfrogs HQ home"
                    className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <img
                      src="/paperfrogs-logo-nav.png"
                      alt="Paperfrogs HQ"
                      className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                      loading="eager"
                      decoding="async"
                    />
                    <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40 sm:block">
                      Paperfrogs
                    </span>
                  </Link>

                  <Dialog.Close asChild>
                    <motion.button
                      type="button"
                      whileHover={rm ? {} : { scale: 1.06 }}
                      whileTap={rm ? {} : { scale: 0.94 }}
                      aria-label="Close menu"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/60 transition-colors hover:border-coral/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:h-11 sm:w-11"
                    >
                      <X className="h-4 w-4" />
                    </motion.button>
                  </Dialog.Close>
                </div>

                <nav className="flex flex-1 flex-col justify-center overflow-y-auto px-5 sm:px-10 lg:px-16">
                  <ul>
                    {items.map((item, i) => (
                        <motion.li
                          key={item.to}
                          initial={{ opacity: 0, y: rm ? 0 : 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: rm ? 0 : 16 }}
                          transition={{
                            delay: rm ? 0 : 0.06 + i * 0.05,
                            duration: rm ? 0.1 : 0.4,
                            ease: EASING,
                          }}
                        >
                          <Link
                            to={item.to}
                            onClick={() => onOpenChange(false)}
                            className="group flex items-center justify-between gap-3 border-b border-white/[0.05] py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:py-6"
                          >
                            <span className="text-[clamp(1.75rem,5.5vw,4rem)] font-bold leading-none tracking-[-0.035em] text-foreground/55 transition-all duration-300 group-hover:translate-x-2 group-hover:text-foreground">
                              {item.label}
                            </span>
                            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/20 transition-colors duration-200 group-hover:text-coral sm:text-[11px]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                  </ul>
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: rm ? 0 : 0.4, duration: rm ? 0.1 : 0.3 }}
                  className="flex shrink-0 flex-wrap items-center justify-between gap-3 px-5 py-5 sm:gap-4 sm:px-10 sm:py-6 lg:px-16"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/22">
                    © {new Date().getFullYear()} {siteMeta.name}
                  </p>
                  <div className="flex items-center gap-4 sm:gap-5">
                    {[
                      { label: "GitHub", href: siteMeta.links.github },
                      { label: "LinkedIn", href: siteMeta.links.linkedin },
                      { label: "X", href: siteMeta.links.x },
                    ].map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/22 transition-colors hover:text-foreground/65"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )};