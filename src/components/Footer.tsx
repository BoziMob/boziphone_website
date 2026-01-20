import { Link } from "@tanstack/react-router";

const footerLinks = [
  { label: "Features", to: "/features" },
  { label: "Lær mer" },
  { label: "Support" },
];

function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-4 border-t border-[color:var(--color-border)] pt-6 text-sm text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-6">
        <span className="font-semibold text-[color:var(--color-ink)]">
          Boziphone
        </span>
        <div className="flex items-center gap-4">
          {footerLinks.map((link) =>
            link.to ? (
              <Link key={link.label} className="font-medium" to={link.to}>
                {link.label}
              </Link>
            ) : (
              <span key={link.label} className="font-medium">
                {link.label}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="h-5 w-5 rounded-full border border-[color:var(--color-border)]" />
        <span className="h-5 w-5 rounded-full border border-[color:var(--color-border)]" />
      </div>
    </footer>
  );
}

export default Footer;
