import { projects, type Project } from "@/data/content";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-navy-800 bg-navy-950 px-2.5 py-0.5 text-xs text-navy-200"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Card({ p }: { p: Project }) {
  const small = p.size === "small";
  return (
    <article
      className={`flex h-full flex-col rounded-xl border border-navy-800 bg-navy-900 transition-colors hover:border-navy-700 ${
        small ? "p-5" : "p-5 sm:p-6"
      }`}
    >
      <p className="mb-2 text-xs text-navy-300">
        {p.context}
        {p.status ? ` · ${p.status}` : ""}
      </p>
      <h3 className={`font-semibold text-white ${small ? "text-lg" : "text-xl"}`}>
        {p.title}
      </h3>
      {p.problem && (
        <p className="mt-3 text-gray-400">
          <span className="font-medium text-gray-300">Problem: </span>
          {p.problem}
        </p>
      )}
      <p className="mt-3 text-gray-300">
        {p.problem && <span className="font-medium text-gray-200">What I built: </span>}
        {p.built}
      </p>
      {p.highlights && <p className="mt-3 text-gray-400">{p.highlights}</p>}
      <Tags tags={p.tags} />
      {p.href && (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-sm font-medium text-navy-300 underline-offset-4 hover:text-white hover:underline"
        >
          {p.hrefLabel ?? "View project"} →
        </a>
      )}
    </article>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <h2 id="work-heading" className="mb-6 text-2xl font-semibold text-white">
          Featured Work
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="h-full">
              <Card p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
