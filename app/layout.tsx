import "styles/tailwind.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://my-freelance-website-murex.vercel.app"),
  title: "Aymeric Dev — Chercheur & ingénieur en intelligence artificielle",
  description: "Recherche et ingénierie en intelligence artificielle : vision par ordinateur, planification neuro-symbolique et machine learning interprétable.",
  openGraph: { title:"Aymeric Dev — Chercheur & ingénieur IA", description:"De la recherche à des systèmes qui fonctionnent dans le monde réel.", type:"website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
