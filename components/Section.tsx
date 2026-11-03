import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Pembungkus umum untuk setiap bagian di landing page.
// "scroll-mt-20" supaya judul tidak tertutup navbar saat menu diklik.
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
