export default function ProjectCard({ project }) {
  return (
    <div className="card card-hover p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {project.description}
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          {project.repo ? (
            <a
              className="btn btn-ghost px-3 py-1.5"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          ) : null}
          {project.href ? (
            <a
              className="btn btn-primary px-3 py-1.5"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(project.tech || []).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}