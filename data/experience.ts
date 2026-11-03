export type ExperienceItem = {
  role: string;
  place: string;
  period: string;
  points: string[];
  type?: string;
  status?: string;
  badge?: string;
  skills?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Fullstack Developer",
    place: "PT. Intellinum Technology Indonesia",
    period: "2024 - 2025",
    type: "Enterprise Solution",
    skills: [
      "Java",
      "Oracle Database",
      "RESTful API",
      "Jira",
      "Enterprise Systems",
    ],
    points: [
      "Mengembangkan dan memelihara tampilan aplikasi enterprise skala korporat berbasis Java.",
      "Mengintegrasikan RESTful API untuk pengambilan, pemrosesan, dan sinkronisasi data dari Oracle Database.",
      "Mengelola sprint harian, pelacakan tiket bug/fitur, dan alur kerja proyek secara terstruktur menggunakan Jira.",
    ],
  },
  {
    role: "Frontend Developer",
    place: "PT. Bax Digital Indonesia",
    period: "2024",
    type: "Web Development",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Git/GitHub",
    ],
    points: [
      "Membangun antarmuka web modern, responsif, dan performan tinggi berbasis Next.js dan Tailwind CSS.",
      "Mengintegrasikan API backend dan menerjemahkan desain UI/UX kompleks ke dalam kode produksi yang bersih.",
      "Berkolaborasi dalam tim pengembang menggunakan Git/GitHub untuk version control dan code review.",
    ],
  },
  {
    role: "Pengajar",
    place: "Pondok Modern Darussalam Gontor",
    period: "2022 - 2023",
    type: "Pendidikan & Kepemimpinan",
    skills: [
      "Leadership",
      "Public Speaking",
      "Problem Solving",
      "Team Mentoring",
    ],
    points: [
      "Menyusun silabus materi dan mengajar para santri secara konsisten dan terstruktur.",
      "Mengasah kepemimpinan tim, komunikasi dwibahasa, serta pemecahan masalah dalam mengelola aktivitas harian.",
    ],
  },
];

export const education: ExperienceItem[] = [
  {
    role: "S1 Teknik Informatika",
    place: "Universitas Siber Asia",
    period: "2024 - 2027 (Target)",
    status: "Sedang Ditempuh",
    badge: "Pendidikan Tinggi",
    points: [
      "Fokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, serta Sistem Basis Data.",
      "Mempelajari arsitektur komputasi terdistribusi, jaringan komputer, dan rekayasa web modern.",
    ],
    skills: [
      "Software Engineering",
      "Data Structures",
      "Algorithms",
      "Database Systems",
    ],
  },
  {
    role: "Fullstack Developer Bootcamp",
    place: "PT DumbWays Teknologi Indonesia",
    period: "2023",
    status: "Selesai",
    badge: "Bootcamp Intensif",
    points: [
      "Pelatihan intensif pengembangan aplikasi web end-to-end dengan ekosistem modern JavaScript/TypeScript.",
      "Membangun proyek riil berskala penuh dengan integrasi RESTful API, PostgreSQL, dan manajemen autentikasi.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API"],
  },
  {
    role: "Kulliyyatul Mu'allimin Al-Islamiyyah (KMI)",
    place: "Pondok Modern Darussalam Gontor",
    period: "2017 - 2022",
    status: "Lulus",
    badge: "Pendidikan Menengah",
    points: [
      "Membentuk kedisiplinan tinggi, kemandirian, dan etika kerja yang kokoh.",
      "Mengasah keterampilan kepemimpinan organisasi dan komunikasi aktif dwibahasa (Arab & Inggris).",
    ],
    skills: [
      "Leadership",
      "Public Speaking",
      "Problem Solving",
      "Bilingual Communication",
    ],
  },
];
