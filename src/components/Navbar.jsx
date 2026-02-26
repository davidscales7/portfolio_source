import Link from "next/link";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80 group-hover:bg-white" />
          <span className="font-semibold tracking-tight">ds</span>
          <span className="text-sm text-white/50">.dev</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm text-white/70">
          <Link href="/" className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white">
            Home
          </Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/cv.pdf"
            className="btn btn-ghost ml-2"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}