import { Link } from "@tanstack/react-router";

const navItems = [
  { label: "Produkt", to: "/" },
  { label: "Ressurser", to: "/features" },
  { label: "Priser" },
];

function Nav() {
  return (
    <nav className="flex items-start justify-between text-sm text-[color:var(--color-ink-soft)]">
      <span className="text-lg font-bold text-[color:var(--color-ink)]">
        BoziPhone
      </span>
      <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-6">
        {navItems.map((item) =>
          item.to ? (
            <Link
              key={item.label}
              className="text-sm font-medium text-[color:var(--color-ink-soft)]"
              to={item.to}
            >
              {item.label}
            </Link>
          ) : (
            <span
              key={item.label}
              className="text-sm font-medium text-[color:var(--color-ink-soft)]"
            >
              {item.label}
            </span>
          ),
        )}
      </div>
    </nav>
  );
}

export default Nav;
