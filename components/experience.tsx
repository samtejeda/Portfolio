import { experience, type Experience } from "@/data/content";

function PrimaryEntry({ job }: { job: Experience }) {
  return (
    <article className="rounded-xl border border-navy-800 bg-navy-900 p-5 sm:p-7">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-xl font-semibold text-white">
          {job.role} <span className="font-normal text-gray-400">· {job.org}</span>
        </h3>
        <p className="text-sm text-gray-400">{job.dates}</p>
      </div>
      <ul className="list-disc space-y-3 pl-5 text-gray-300 marker:text-navy-400">
        {job.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function CompactEntry({ job }: { job: Experience }) {
  return (
    <article className="border-t border-navy-800/70 py-4 first:border-t-0">
      <div className="mb-1.5 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-gray-100">
          {job.role} <span className="font-normal text-gray-400">· {job.org}</span>
        </h3>
        <p className="text-sm text-gray-400">{job.dates}</p>
      </div>
      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-400 marker:text-navy-700">
        {job.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

export default function ExperienceSection() {
  const primary = experience.filter((e) => e.emphasis === "primary");
  const compact = experience.filter((e) => e.emphasis === "compact");

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <h2 id="experience-heading" className="mb-6 text-2xl font-semibold text-white">
          Experience
        </h2>
        <div className="space-y-6">
          {primary.map((job) => (
            <PrimaryEntry key={job.org} job={job} />
          ))}
          <div className="px-1">
            {compact.map((job) => (
              <CompactEntry key={job.org} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
