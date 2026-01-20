const footerLinks = ["Features", "Lær mer", "Support"];

function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-6">
        <span className="font-semibold text-neutral-900">Boziphone</span>
        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a key={link} className="font-medium" href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="h-5 w-5 rounded-full border border-neutral-300" />
        <span className="h-5 w-5 rounded-full border border-neutral-300" />
      </div>
    </footer>
  );
}

export default Footer;
