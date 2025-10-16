import { notFound } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";

const WORKS: Record<string, { title: string; year: number; description: string; motifs: string[] }> = {
  "lolita": {
    title: "Lolita",
    year: 1955,
    description: "A controversial masterpiece exploring obsession and unreliable narration.",
    motifs: ["road trip", "nymphet", "wordplay"],
  },
  "pale-fire": {
    title: "Pale Fire",
    year: 1962,
    description: "A 999-line poem with commentary that becomes the novel itself.",
    motifs: ["Zembla", "commentary", "authorship"],
  },
  "ada": {
    title: "Ada, or Ardor",
    year: 1969,
    description: "An intricate romance set in an alternate history world.",
    motifs: ["memory", "time", "intertext"],
  },
};

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = WORKS[params.slug];
  if (!work) return notFound();
  return (
    <main className="container mx-auto px-6 py-10 max-w-3xl">
      <SiteHeader />
      <section className="mt-10 card p-6">
        <h1 className="text-3xl font-serif">{work.title} <span className="text-xl text-ink/60">({work.year})</span></h1>
        <p className="mt-3 text-ink/80">{work.description}</p>
        <div className="mt-6">
          <h2 className="font-serif">Motifs</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {work.motifs.map(m => (
              <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-amber/20 text-ink/80 border border-amber/30">{m}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
