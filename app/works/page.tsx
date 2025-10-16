import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

const works = [
  { slug: "lolita", title: "Lolita", year: 1955 },
  { slug: "pale-fire", title: "Pale Fire", year: 1962 },
  { slug: "ada", title: "Ada, or Ardor", year: 1969 },
];

export default function WorksPage() {
  return (
    <main className="container mx-auto px-6 py-10 max-w-4xl">
      <SiteHeader />
      <h1 className="mt-10 text-3xl font-serif">Works</h1>
      <ul className="mt-6 space-y-3">
        {works.map(w => (
          <li key={w.slug} className="card p-4 flex items-center justify-between">
            <div>
              <div className="font-serif">{w.title}</div>
              <div className="text-sm text-ink/60">{w.year}</div>
            </div>
            <Link href={`/works/${w.slug}`} className="text-accent">Open →</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
