export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="max-w-2xl text-zinc-300">
        I’m a software developer who builds modern web apps. I enjoy working on
        clean UI, performance, and well-structured code.
      </p>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 space-y-3">
        <h2 className="font-medium">Skills</h2>
        <ul className="list-inside list-disc text-sm text-zinc-300 space-y-1">
          <li>Next.js / React</li>
          <li>Tailwind CSS</li>
          <li>APIs / Node.js</li>
          <li>Git / Deployment</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <h2 className="font-medium">CV</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Download my CV here:{" "}
          <a className="underline text-zinc-200" href="/cv.pdf" target="_blank" rel="noreferrer">
            cv.pdf
          </a>
        </p>
      </div>
    </section>
  );
}