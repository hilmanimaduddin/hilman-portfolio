import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 p-5 transition hover:shadow-md dark:border-slate-800">
      <h3 className="font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-4 text-sm font-medium">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:underline dark:text-slate-300"
          >
            Kode
          </a>
        )}
      </div>
    </article>
  );
}
