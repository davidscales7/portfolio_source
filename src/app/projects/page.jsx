import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="chip w-fit">Projects</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I’ve built
        </h1>
        <p className="max-w-2xl text-white/70">
          A selection of projects — demos, experiments, and real builds.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
  <p className="font-medium text-white">More coming soon</p>
  <p className="mt-1">
    I’m always building and experimenting — I’ll add more case studies as I polish them.
  </p>
</div>
    </section>
  );
}