import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <h2 id="skills-heading" className="mb-6 text-2xl font-semibold text-white">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-navy-800 bg-navy-900 px-3.5 py-1.5 text-sm text-gray-200"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
