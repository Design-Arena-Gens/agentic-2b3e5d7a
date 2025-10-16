import Link from "next/link";
import clsx from "clsx";

export function WorkCard({ title, year, summary, tags, href }: {
  title: string;
  year: string;
  summary: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link href={href as any} className={clsx("card p-5 block hover:shadow-lg transition-shadow")} prefetch>
      <div className="flex items-baseline justify-between">
        <h3 className="font-serif text-xl">{title}</h3>
        <span className="text-sm text-ink/60">{year}</span>
      </div>
      <p className="mt-2 text-ink/80">
        {summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-amber/20 text-ink/80 border border-amber/30">{t}</span>
        ))}
      </div>
    </Link>
  );
}
