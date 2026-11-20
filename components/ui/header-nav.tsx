import Link from "next/link";

const links = [
  { href: "#experience", label: "Experience", hideOnMobile: false },
  { href: "#work", label: "Work", hideOnMobile: false },
  { href: "#education", label: "Education", hideOnMobile: true },
  { href: "#contact", label: "Contact", hideOnMobile: false },
];

export default function HeaderNav() {
  return (
    <header className="border-b border-navy-800/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Samuel Tejeda — home"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy-800 text-xs font-semibold tracking-wide text-white"
        >
          ST
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm text-gray-300">
            {links.map((l) => (
              <li key={l.href} className={l.hideOnMobile ? "hidden sm:block" : ""}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
