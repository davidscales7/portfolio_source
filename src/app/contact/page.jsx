export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <p className="max-w-2xl text-zinc-300">
        Want to work together or have a question? The easiest way to reach me:
      </p>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>
            Email:{" "}
            <a className="underline text-zinc-200" href="mailto:you@email.com">
              davidscales7@email.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a className="underline text-zinc-200" href="https://github.com/your-username" target="_blank" rel="noreferrer">
              github.com/your-username
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a className="underline text-zinc-200" href="https://linkedin.com/in/your-handle" target="_blank" rel="noreferrer">
              https://www.linkedin.com/in/david-scales-83492b264/
            </a>
          </li>
          <li>
            CV:{" "}
            <a className="underline text-zinc-200" href="/cv.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}