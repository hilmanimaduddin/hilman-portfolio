import Section from "./Section";
import { education } from "@/data/experience";

export default function Education() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        // Topi Toga / Universitas
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
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
        );
      case 1:
        // Terminal / Bootcamp
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
        // Buku / Pendidikan Menengah
        return (
          <svg
            className="h-5 w-5 text-amber-600 dark:text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M6 6h10" />
            <path d="M6 10h10" />
          </svg>
        );
    }
  };

  return (
    <Section id="pendidikan" title="Pendidikan">
      {/* Modern Education Timeline */}
      <div className="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500/40 before:to-slate-200 sm:before:left-6 dark:before:to-slate-800">
        {education.map((item, index) => (
          <div
            key={`${item.role}-${item.period}`}
            className="relative flex items-center gap-4 sm:gap-6"
          >
            {/* Spine Node Icon */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-xs sm:h-12 sm:w-12 dark:border-slate-800 dark:bg-slate-900">
              {getIcon(index)}
            </div>

            {/* Education Card */}
            <div className="group w-full rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-indigo-500/40">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    {item.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
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
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    </svg>
                    <span>{item.place}</span>
                  </div>
                </div>

                {/* Periode */}
                <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300">
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
