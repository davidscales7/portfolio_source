export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-zinc-300">
        Want to work together or have a question? The easiest way to reach me:
      </p>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <ul className="space-y-3 text-sm text-zinc-300">
          <li className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <span className="text-white/50 shrink-0">Email</span>
            <a className="underline text-zinc-200 break-all" href="mailto:davidscales7@email.com">
              davidscales7@email.com
            </a>
          </li>
          <li className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <span className="text-white/50 shrink-0">LinkedIn</span>
            <a
              className="underline text-zinc-200 break-all"
              href="https://www.linkedin.com/in/david-scales-83492b264/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/david-scales-83492b264
            </a>
          </li>
          <li className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <span className="text-white/50 shrink-0">CV</span>
            <a className="underline text-zinc-200" href="/cv.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}