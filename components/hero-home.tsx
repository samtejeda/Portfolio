import { profile } from "@/data/content";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

const iconLink =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-navy-800 text-gray-200 transition-colors hover:border-navy-400 hover:text-white";

export default function HeroHome() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="mx-auto max-w-5xl px-4 pb-8 pt-8 sm:px-6 md:pb-16 md:pt-20">
        <p className="mb-3 text-sm font-medium text-navy-300">{profile.title}</p>
        <h1
          id="hero-heading"
          className="mb-5 text-4xl font-semibold tracking-tight text-white md:text-5xl"
        >
          {profile.name}
        </h1>
        <p className="max-w-2xl text-base text-gray-300 md:text-lg">{profile.pitch}</p>

        <div className="mt-6 flex items-center gap-2 sm:gap-3">
          <a
            href={profile.cvHref}
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-navy-800 px-3.5 sm:px-5 text-sm font-medium text-white transition-colors hover:bg-navy-700"
          >
            <DownloadIcon />
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center rounded-lg border border-navy-700 px-3.5 sm:px-5 text-sm font-medium text-gray-100 transition-colors hover:border-navy-400 hover:text-white"
          >
            Contact
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLink}
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLink}
          >
            <LinkedInIcon />
          </a>
        </div>

        <p className="mt-5 text-sm text-gray-400">{profile.location}</p>
      </div>
    </section>
  );
}
