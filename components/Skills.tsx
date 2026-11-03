import Section from "./Section";
import { skills } from "@/data/skills";

export default function Skills() {
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return {
          icon: (
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
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="8" x2="16" y1="21" y2="21" />
              <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
          ),
          badge:
            "text-indigo-700 bg-indigo-50 dark:bg-indigo-950/60 dark:text-indigo-300",
          iconBg: "bg-indigo-50 dark:bg-indigo-950/60",
        };
      case "Backend & API Integration":
        return {
          icon: (
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
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
              <line x1="6" x2="6.01" y1="6" y2="6" />
              <line x1="6" x2="6.01" y1="18" y2="18" />
            </svg>
          ),
          badge:
            "text-purple-700 bg-purple-50 dark:bg-purple-950/60 dark:text-purple-300",
          iconBg: "bg-purple-50 dark:bg-purple-950/60",
        };
      case "Database & ORM":
        return {
          icon: (
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
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
              <path d="M3 12A9 3 0 0 0 21 12" />
            </svg>
          ),
          badge:
            "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300",
          iconBg: "bg-emerald-50 dark:bg-emerald-950/60",
        };
      default:
        // Tools & Workflow
        return {
          icon: (
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
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M13 6h3a2 2 0 0 1 2 2v7" />
              <line x1="6" x2="6" y1="9" y2="21" />
            </svg>
          ),
          badge:
            "text-amber-700 bg-amber-50 dark:bg-amber-950/60 dark:text-amber-300",
          iconBg: "bg-amber-50 dark:bg-amber-950/60",
        };
    }
  };

  return (
    <Section id="skill" title="Keahlian & Teknologi">
      {/* Grid Kartu Kategori */}
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => {
          const style = getCategoryStyle(group.category);

          return (
            <div
              key={group.category}
              className="group rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-indigo-500/40"
            >
              {/* Header Kartu: Icon, Nama Kategori & Jumlah */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.iconBg}`}
                  >
                    {style.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>
              </div>

              {/* Daftar Skill Pills */}
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group/pill inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-white hover:text-indigo-600 hover:shadow-xs dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover/pill:bg-indigo-500 dark:bg-slate-600 dark:group-hover/pill:bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
