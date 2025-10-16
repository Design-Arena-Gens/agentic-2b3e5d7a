import "./globals.css";
import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nabokovs Web",
  description: "A literary web of themes, motifs, and intertextual connections.",
  metadataBase: new URL("https://agentic-2b3e5d7a.vercel.app"),
  openGraph: {
    title: "Nabokovs Web",
    description: "A literary web of themes, motifs, and intertextual connections.",
    url: "https://agentic-2b3e5d7a.vercel.app",
    siteName: "Nabokovs Web",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabokovs Web",
    description: "A literary web of themes, motifs, and intertextual connections.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-parchment text-ink antialiased min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <footer className="text-center py-8 text-sm text-ink/60">© {new Date().getFullYear()} Nabokovs Web</footer>
      </body>
    </html>
  );
}
