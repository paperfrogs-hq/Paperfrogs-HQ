import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { siteMeta } from "@/data/site";

type MenuItem = {
  label: string;
  to: string;
};

type MenuOverlayProps = {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  items: MenuItem[];
};

export const MenuOverlay = ({ open, onOpenChange, items }: MenuOverlayProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24 }}
                className="fixed inset-0 z-[70] bg-background/92 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 z-[80] flex flex-col px-6 pb-10 pt-6 sm:px-10"
              >
                <Dialog.Title className="sr-only">Site Menu</Dialog.Title>
                <Dialog.Description className="sr-only">Navigate Paperfrogs HQ pages and social links.</Dialog.Description>

                <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
                  <Link
                    to="/"
                    onClick={() => onOpenChange(false)}
                    className="text-sm font-semibold tracking-[0.08em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    Paperfrogs HQ
                  </Link>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground transition-colors hover:border-coral/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                      aria-label="Close menu"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="mx-auto mt-16 flex w-full max-w-6xl flex-1 items-center">
                  <ul className="w-full space-y-4 sm:space-y-6">
                    {items.map((item, index) => (
                      <motion.li
                        key={item.to}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ delay: 0.04 * index, duration: 0.24 }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => onOpenChange(false)}
                          className="inline-flex text-3xl font-medium tracking-[-0.02em] text-foreground/90 transition-colors hover:text-coral sm:text-5xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
                  <div className="space-y-2">
                    <p>{siteMeta.location}</p>
                    <div className="flex items-center gap-4">
                      <Link
                        to="/privacy"
                        onClick={() => onOpenChange(false)}
                        className="hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                      >
                        Privacy
                      </Link>
                      <Link
                        to="/terms"
                        onClick={() => onOpenChange(false)}
                        className="hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                      >
                        Terms
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <a
                      href={siteMeta.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                    >
                      GitHub
                    </a>
                    <a
                      href={siteMeta.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={siteMeta.links.x}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                    >
                      X
                    </a>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
};
