import { SiteHeader } from "../../components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-10 max-w-3xl">
      <SiteHeader />
      <article className="prose mt-10">
        <h1 className="font-serif">About</h1>
        <p>
          Nabokovs Web is a reader-friendly map of motifs, themes, and intertextual
          references across Vladimir Nabokov’s works. It is a lightweight,
          aesthetic UI oriented toward exploration.
        </p>
      </article>
    </main>
  );
}
