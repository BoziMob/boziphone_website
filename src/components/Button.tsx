import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-black text-white hover:bg-neutral-800",
  secondary:
    "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export default Button;
