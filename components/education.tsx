import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <h2 id="education-heading" className="mb-6 text-2xl font-semibold text-white">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((e) => (
            <article key={e.school} className="border-l-2 border-navy-800 pl-5">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {e.degree}{" "}
                  <span className="font-normal text-gray-400">· {e.school}</span>
                </h3>
                <p className="text-sm text-gray-400">{e.date}</p>
              </div>
              <p className="mt-1 text-sm text-gray-400">{e.details.join(" · ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
