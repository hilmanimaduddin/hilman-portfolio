import Image from "next/image";
import { profile } from "@/data/profile";

const coreSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Golang",
  "PostgreSQL",
];

const highlights = [
  {
    icon: (
      <svg
        className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m9 8 3 3-3 3" />
        <path d="M14 17h3" />
      </svg>
    ),
    title: "Modern Web Architecture",
    desc: "Membangun antarmuka modern yang cepat, responsif, dan SEO-friendly.",
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "Backend & Database",
    desc: "Integrasi RESTful API aman dan pengelolaan database terstruktur.",
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
    title: "Enterprise Experience",
    desc: "Berpengalaman mengembangkan sistem bisnis dan alur kerja Agile/Scrum.",
  },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative scroll-mt-20 overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24"
    >
      {/* Background radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.18),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.22),rgba(15,23,42,0))]"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Main Grid: Left Intro + Right Code Window */}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Kolom Kiri: Teks & Aksi */}
          <div className="space-y-6 lg:col-span-7">
            {/* Status Pill Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-700 shadow-xs backdrop-blur-sm dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Siap untuk Peluang Kerja & Proyek Baru</span>
            </div> */}

            {/* Nama & Peran */}
            <div>
              <p className="text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Halo, saya
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                {profile.name}
              </h1>
              <h2 className="mt-2 text-xl font-bold tracking-tight bg-clip-text sm:text-2xl dark:from-indigo-400 dark:via-purple-300 dark:to-indigo-300">
                {profile.role}
              </h2>
            </div>

            {/* Bio Ringkas */}
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {profile.about}
            </p>

            {/* Core Tech Stack Preview */}
            {/* <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Tech Stack:
              </span>
              {coreSkills.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200/80 bg-slate-100/70 px-2.5 py-0.5 text-xs font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div> */}

            {/* Tombol Aksi */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.cvUrl}
                download
                className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span>Unduh CV</span>
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-2xs transition hover:border-slate-400 hover:bg-slate-50 active:scale-[0.99] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                <span>Hubungi Saya</span>
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              {/* Shortcut Social Icons */}
              <div className="ml-1 flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  aria-label="GitHub Profile"
                >
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
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil dengan Frame Menarik & Floating Badges */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-xs sm:max-w-sm">
              {/* Glow background di belakang foto */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-400 opacity-25 blur-2xl transition duration-500 hover:opacity-40"
              />

              {/* Kontainer Foto Utama */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={profile.avatarUrl}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                    className="object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badge Kiri Bawah: Pengalaman & Keahlian */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/70 dark:text-indigo-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Full-Stack Developer
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Web &amp; Enterprise Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-xs backdrop-blur-sm transition hover:border-indigo-500/40 hover:shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-indigo-500/40"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/60">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
