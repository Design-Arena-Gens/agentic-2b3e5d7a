import { SiteHeader } from "../../components/SiteHeader";
import { WebGraph } from "../../components/WebGraph";

export default function WebPage() {
  return (
    <main className="container mx-auto px-6 py-10 max-w-5xl">
      <SiteHeader />
      <section className="mt-10 card p-6">
        <h1 className="text-3xl font-serif">The Web</h1>
        <p className="mt-2 text-ink/70">Explore connections across works and themes.</p>
        <div className="mt-6">
          <WebGraph />
        </div>
      </section>
    </main>
  );
}
