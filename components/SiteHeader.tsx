import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="font-serif text-3xl">Nabokovs Web</Link>
      <nav className="flex gap-6 text-ink/80">
        <Link href="/web" className="hover:text-ink">Web</Link>
        <Link href="/works" className="hover:text-ink">Works</Link>
        <Link href="/about" className="hover:text-ink">About</Link>
      </nav>
    </header>
  );
}
