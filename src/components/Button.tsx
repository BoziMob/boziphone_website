import type { ButtonHTMLAttributes } from "react";
import { Link } from "@tanstack/react-router";

const variants = {
  primary:
    "bg-[color:var(--color-ink)] text-[color:var(--color-surface)] hover:bg-[color:var(--color-ink-hover)]",
  secondary:
    "border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-muted)]",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  to?: string;
};

function Button({
  className = "",
  variant = "primary",
  to,
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
