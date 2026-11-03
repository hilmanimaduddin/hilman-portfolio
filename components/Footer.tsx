import { profile } from "@/data/profile";

const navigationLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#skill", label: "Keahlian" },
  { href: "#kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-slate-50/50 pt-16 pb-12 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60">
      {/* Glow ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-3xl dark:from-indigo-500/15"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12">
          {/* Kolom Profil & Status */}
          <div className="space-y-4 md:col-span-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {profile.name}
              </h3>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {profile.role}
              </p>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.tagline}
            </p>
          </div>

          {/* Kolom Navigasi */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase dark:text-slate-200">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Sosial & Kontak */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase dark:text-slate-200">
              Terhubung
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition group-hover:border-indigo-500 group-hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:group-hover:border-indigo-400 dark:group-hover:text-indigo-400">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition group-hover:border-indigo-500 group-hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:group-hover:border-indigo-400 dark:group-hover:text-indigo-400">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                aria-label="Email"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition group-hover:border-indigo-500 group-hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:group-hover:border-indigo-400 dark:group-hover:text-indigo-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Garis batas bawah & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 sm:flex-row dark:border-slate-800/80 dark:text-slate-400">
          <p>© 2026 {profile.name}.</p>

          <div className="flex items-center gap-4">
            {/* <span className="inline-flex items-center gap-1.5">
              Dibuat dengan Next.js & Tailwind CSS
            </span> */}

            <a
              href="#beranda"
              aria-label="Kembali ke atas"
              className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600 transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              <span>Atas</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
