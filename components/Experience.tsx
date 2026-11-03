import Section from "./Section";
import { experience } from "@/data/experience";

export default function Experience() {
  const getRoleIcon = (index: number) => {
    switch (index) {
      case 0:
        // Fullstack / Enterprise Briefcase
        return (
          <svg
            className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 1:
        // Frontend / Layers
        return (
          <svg
            className="h-5 w-5 text-purple-600 dark:text-purple-400"
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
        );
      default:
        // Leadership / Mentoring
        return (
          <svg
            className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
    }
  };

  return (
    <Section id="pengalaman" title="Pengalaman Kerja">
      {/* Experience Timeline */}
      <div className="relative space-y-8 before:absolute before:top-3 before:bottom-3 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500/40 before:to-slate-200 sm:before:left-6 dark:before:to-slate-800">
        {experience.map((item, index) => (
          <div
            key={`${item.role}-${item.period}`}
            className="relative flex items-start gap-4 sm:gap-6"
          >
            {/* Spine Node Icon */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-xs sm:h-12 sm:w-12 dark:border-slate-800 dark:bg-slate-900">
              {getRoleIcon(index)}
            </div>

            {/* Experience Card */}
            <div className="group w-full rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-md sm:p-7 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-indigo-500/40">
              {/* Header: Role & Period */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    {item.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    </svg>
                    <span>{item.place}</span>
                  </div>
                </div>

                {/* Badges: Type & Period */}
                <div className="mt-1 flex flex-wrap items-center gap-2 sm:mt-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300">
                    <svg
                      className="h-3.5 w-3.5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities / Impact Points */}
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              {item.skills && item.skills.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                  <span className="mr-1 text-xs font-medium text-slate-400 dark:text-slate-500">
                    Teknologi:
                  </span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
