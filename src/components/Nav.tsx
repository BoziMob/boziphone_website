import { Link } from "@tanstack/react-router";

const navItems = [
  { label: "Produkt", to: "/product" },
  { label: "Lær mer", to: "/learn" },
  { label: "Priser", to: "/pricing" },
];

function Nav() {
  return (
    <nav className="flex items-start justify-between text-sm text-[color:var(--color-ink-soft)]">
      <Link
        to="/"
        className="text-lg font-bold text-[color:var(--color-ink)]"
      >
        BoziPhone
      </Link>
      <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            className="text-sm font-medium text-[color:var(--color-ink-soft)]"
            to={item.to}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
