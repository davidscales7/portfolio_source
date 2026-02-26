import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <div className="space-y-14">
      <section className="space-y-6">
        <p className="chip w-fit">Software Developer</p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          I build fast, clean web apps with modern JavaScript.
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-white/70">
          I focus on Next.js, UI polish, and building products that feel great to use.
          Here are a few projects and ways to reach me.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/projects" className="btn btn-primary">View projects</Link>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">
            Download CV
          </a>
          <Link href="/contact" className="btn btn-ghost">Contact</Link>
        </div>

        <div className="grid gap-3 pt-4 sm:grid-cols-3">
          {[
            { k: "Frontend", v: "Next.js, React, Tailwind" },
            { k: "Backend", v: "APIs, auth, DB basics" },
            { k: "Shipping", v: "Deployments + clean code" },
          ].map((x) => (
            <div key={x.k} className="card p-4">
              <p className="text-sm font-medium">{x.k}</p>
              <p className="mt-1 text-sm text-white/60">{x.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured work</h2>
            <p className="mt-1 text-sm text-white/60">
              A couple highlights. See more on the projects page.
            </p>
          </div>
          <Link href="/projects" className="text-sm text-white/70 hover:text-white">
            View all →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}