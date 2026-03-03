"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProjectPageClient({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  const screenshots = project.screenshots || [];
  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setLightboxIndex((i) => (i + 1) % screenshots.length);

  return (
    <section className="space-y-8 max-w-3xl w-full">
      <Link href="/projects" className="text-sm text-white/50 hover:text-white inline-block">
        ← Back to projects
      </Link>

      {project.image && (
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Buttons — stack on mobile, row on sm+ */}
      <div className="flex flex-wrap gap-3">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-ghost flex-1 sm:flex-none justify-center">
            View Repo
          </a>
        )}
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer" className="btn btn-primary flex-1 sm:flex-none justify-center">
            Live Site
          </a>
        )}
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-white/70 leading-relaxed">{project.longDescription || project.description}</p>
      </div>

      {screenshots.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Screenshots</h2>
          {/* 1 col on mobile, 2 col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {screenshots.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="relative h-48 overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition cursor-zoom-in w-full"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {(project.tech || []).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none z-10">✕</button>
          <p className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-white/50">
            {lightboxIndex + 1} / {screenshots.length}
          </p>

          {/* Prev — hidden on very small screens, shown on sm+ */}
          <button
            className="absolute left-2 sm:left-4 text-white/70 hover:text-white text-4xl px-2 sm:px-3 py-2 z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={screenshots[lightboxIndex]}
              alt="Screenshot enlarged"
              width={1400}
              height={900}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <button
            className="absolute right-2 sm:right-4 text-white/70 hover:text-white text-4xl px-2 sm:px-3 py-2 z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}