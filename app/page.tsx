import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { WebGraph } from "../components/WebGraph";
import { WorkCard } from "../components/WorkCard";

export default function HomePage() {
  return (
    <main className="container mx-auto px-6 py-10 max-w-6xl">
      <SiteHeader />

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <WorkCard
          title="Lolita"
          year="1955"
          summary="A controversial masterpiece exploring obsession, unreliable narration, and the aesthetics of language."
          tags={["obsession", "unreliable narrator", "wordplay"]}
          href="/works/lolita"
        />
        <WorkCard
          title="Pale Fire"
          year="1962"
          summary="A novel-poem hybrid where commentary overtakes the text, weaving identity and authorship."
          tags={["metafiction", "poem", "commentary"]}
          href="/works/pale-fire"
        />
        <WorkCard
          title="Ada, or Ardor"
          year="1969"
          summary="An alternate-history romance, luxuriating in memory, time, and intertext."
          tags={["memory", "time", "intertext"]}
          href="/works/ada"
        />
      </section>

      <section className="mt-16 card p-6">
        <h2 className="text-2xl font-serif">The Web</h2>
        <p className="mt-2 text-ink/70">Themes, motifs, and references connecting Nabokov’s works.</p>
        <div className="mt-6">
          <WebGraph />
        </div>
        <div className="mt-4 text-right">
          <Link href="/web" className="text-accent">Explore the full web →</Link>
        </div>
      </section>
    </main>
  );
}
