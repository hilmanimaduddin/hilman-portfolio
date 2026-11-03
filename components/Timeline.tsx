import type { ExperienceItem } from "@/data/experience";

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="space-y-6 border-l border-slate-200 pl-6 dark:border-slate-800">
      {items.map((item) => (
        <li key={`${item.role}-${item.period}`}>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {item.period}
          </p>
          <p className="font-medium text-slate-900 dark:text-white">
            {item.role}
          </p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">
            {item.place}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
