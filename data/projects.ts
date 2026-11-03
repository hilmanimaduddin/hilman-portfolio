export type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Nama Proyek 1",
    description:
      "Satu atau dua kalimat: masalah yang diselesaikan, solusi yang dibuat, dan hasilnya.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    demo: "https://contoh.com",
    repo: "https://github.com/username/proyek-1",
  },
  {
    title: "Nama Proyek 2",
    description:
      "Jelaskan singkat apa fungsi proyek ini dan peran Anda di dalamnya.",
    tech: ["React", "Node.js", "MongoDB"],
    repo: "https://github.com/username/proyek-2",
  },
  {
    title: "Nama Proyek 3",
    description:
      "Pilih proyek terbaik saja. 3 sampai 4 proyek sudah cukup untuk landing page.",
    tech: ["Next.js", "Tailwind CSS"],
    demo: "https://contoh.com",
  },
];
