import type { AnchorHTMLAttributes } from "react";
import { Link } from "@tanstack/react-router";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
  children: string;
};

function TextLink({ to, className = "", children, ...props }: TextLinkProps) {
  const classes = `text-base font-semibold text-blue-600 transition hover:text-blue-500 ${className}`;

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
