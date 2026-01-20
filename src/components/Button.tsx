import type { ButtonHTMLAttributes } from 'react'

const variants = {
  primary:
    'bg-[color:var(--color-ink)] text-[color:var(--color-surface)] hover:bg-[color:var(--color-ink-hover)]',
  secondary:
    'border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-muted)]',
} as const

type ButtonVariant = keyof typeof variants

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export default Button
