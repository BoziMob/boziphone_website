import { Link } from "@tanstack/react-router";

const footerLinks = [
  { label: "Features", to: "/features" },
  { label: "Lær mer", to: "/learn" },
  { label: "Ressurser", to: "/resources" },
  { label: "Om oss", to: "/about" },
  { label: "Support", to: "/support" },
];

function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-4 border-t border-[color:var(--color-border)] pt-6 text-sm text-[color:var(--color-muted)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-base font-semibold text-[color:var(--color-ink)]"
          >
            BoziPhone
          </Link>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            {footerLinks.map((link) => (
              <Link key={link.label} className="font-medium" to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
          <a className="font-medium" href="mailto:kontakt@bozi.no">
            kontakt@bozi.no
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="font-medium"
            href="https://www.instagram.com/bozimobengineering/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="font-medium"
            href="https://github.com/BoziMob"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="text-xs text-[color:var(--color-muted)]">
        © {new Date().getFullYear()} BoziMob Engineering. BoziPhone er et produkt
        fra BoziMob Engineering.
      </p>
    </footer>
  );
}

export default Footer;
