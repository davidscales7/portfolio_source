import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card card-hover overflow-hidden block">
      {project.image && (
       <div className="relative w-full overflow-hidden rounded-xl border border-white/10 aspect-[16/9] bg-black/20">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover object-top"
    sizes="(max-width: 640px) 100vw, 50vw"
  />
</div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{project.description}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.repo && (
              <span className="btn btn-ghost px-3 py-1.5">Repo</span>
            )}
            {project.href && (
              <span className="btn btn-primary px-3 py-1.5">Live</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(project.tech || []).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}