const navItems = ["Produkt", "Ressurser", "Priser"];

function Nav() {
  return (
    <nav className="flex items-start justify-between text-sm text-neutral-800">
      <span className="text-lg font-bold">BoziPhone</span>
      <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            className="text-sm font-medium text-neutral-700"
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
