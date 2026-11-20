import { profile } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const link =
  "inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer id="contact" className="mt-6 border-t border-navy-800/60">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">Contact</h2>
        <ul className="flex flex-col gap-3 text-base sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li>
            <a href={`mailto:${profile.email}`} className={link}>
              <MailIcon /> {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
              <GitHubIcon /> github.com/samtejeda
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
              <LinkedInIcon /> LinkedIn
            </a>
          </li>
        </ul>
        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} {profile.name} · {profile.languages}
        </p>
      </div>
    </footer>
  );
}
