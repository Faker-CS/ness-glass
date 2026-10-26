import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "brand" | "light" | "outline";

// Figma "Frame 67": 56 px pill, 16 px padding, Inter Semi Bold 16.
const variantClasses: Record<ButtonVariant, string> = {
  brand: "bg-brand text-snow hover:bg-brand/85",
  light: "bg-snow text-brand hover:bg-mist",
  outline: "border-3 border-snow bg-glow-pill text-white hover:border-brand-cyan",
};

export function buttonClasses(variant: ButtonVariant = "brand", className?: string) {
  return cn(
    // min-h instead of h so a long label can wrap on narrow phones instead of overflowing.
    "inline-flex min-h-14 items-center justify-center rounded-full px-4 py-2 text-center text-body font-semibold transition-colors duration-200",
    variantClasses[variant],
    className,
  );
}

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonLinkProps = BaseProps & Omit<ComponentPropsWithoutRef<"a">, "className" | "children">;
type ButtonProps = BaseProps & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

/** Pill call to action that navigates (page anchors, tel:, mailto:). */
export function ButtonLink({ children, variant, className, ...rest }: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, className)} {...rest}>
      {children}
    </a>
  );
}

/** Pill call to action that performs an action (form submit, menu). */
export function Button({ children, variant, className, type = "button", ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}
