import type { AnchorHTMLAttributes } from "react";
import { Link } from "@tanstack/react-router";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
  children: string;
};

function TextLink({ to, className = "", children, ...props }: TextLinkProps) {
  const classes = `text-base font-semibold text-[color:var(--color-link)] underline decoration-[color:var(--color-border)] underline-offset-4 transition-colors hover:text-[color:var(--color-link-hover)] ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

export default TextLink;
