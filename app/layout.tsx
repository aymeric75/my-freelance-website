import "styles/tailwind.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://my-freelance-website-murex.vercel.app"),
  title: "Aymeric Dev — Applied AI Researcher & Engineer",
  description: "Applied AI research and engineering across computer vision, neuro-symbolic planning and interpretable machine learning.",
  openGraph: { title:"Aymeric Dev — Applied AI Researcher & Engineer", description:"AI systems that move from research to reality.", type:"website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
