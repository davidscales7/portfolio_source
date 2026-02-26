import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ds — Software Developer",
  description: "Portfolio built with Next.js + Tailwind",
};

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute top-40 right-[-160px] h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute bottom-[-220px] left-[-180px] h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-white">
        <div className="relative">
          <Glow />
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}