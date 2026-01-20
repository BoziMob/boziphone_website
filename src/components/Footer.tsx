import { Link } from "@tanstack/react-router";

const footerLinks = [
  { label: "Features", to: "/features" },
  { label: "Lær mer", to: "/learn" },
  { label: "Support", to: "/support" },
];

function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-4 border-t border-[color:var(--color-border)] pt-6 text-sm text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-semibold text-[color:var(--color-ink)]"
          >
            Boziphone
          </Link>
          <div className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <Link key={link.label} className="font-medium" to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <a className="font-medium" href="mailto:kontakt@bozi.no">
          kontakt@bozi.no
        </a>
      </div>
      <div className="flex items-center gap-3">
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
    </footer>
  );
}

export default Footer;
