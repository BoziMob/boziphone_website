const navItems = ['Produkt', 'Ressurser', 'Priser']

function Nav() {
  return (
    <nav className="flex items-start justify-between text-sm text-[color:var(--color-ink-soft)]">
      <span className="text-lg font-bold text-[color:var(--color-ink)]">
        BoziPhone
      </span>
      <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            className="text-sm font-medium text-[color:var(--color-ink-soft)]"
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Nav
