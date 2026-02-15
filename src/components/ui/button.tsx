import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-coral text-background font-semibold rounded-full hover:opacity-90 active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground rounded-full hover:bg-muted hover:border-foreground/30",
        secondary: "bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-muted rounded-lg",
        link: "text-coral underline-offset-4 hover:underline",
        hero: "bg-coral text-background font-semibold rounded-full hover:opacity-90 active:scale-[0.98] shadow-[0_0_30px_hsl(var(--coral)/0.3)]",
        heroOutline: "border border-foreground/20 bg-transparent text-foreground rounded-full hover:border-foreground/50 hover:bg-foreground/5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
