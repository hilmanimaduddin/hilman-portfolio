"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#skill", label: "Keahlian" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = [
        "beranda",
        "pendidikan",
        "pengalaman",
        "skill",
        "kontak",
      ];
      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4 py-3 sm:px-6">
        <nav
          className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-3.5 py-2 transition-all duration-300 sm:rounded-full sm:px-4 md:w-auto md:justify-center ${
            isScrolled
              ? "border-slate-200/80 bg-white/85 shadow-md backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85"
              : "border-slate-200/50 bg-white/60 shadow-xs backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-950/60"
          }`}
        >
          {/* Mobile: Indikator Bagian Aktif */}
          <div className="flex items-center gap-2 px-1.5 md:hidden">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold capitalize text-slate-800 dark:text-slate-200">
              {activeSection}
            </span>
          </div>

          {/* Menu Desktop (Centered Floating Capsule) */}
          <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/70 dark:text-indigo-300"
                        : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Garis pemisah halus di desktop */}
          <span className="hidden h-4 w-px bg-slate-200 md:block dark:bg-slate-800" />

          {/* Tombol Aksi Kanan (Desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#kontak"
              className="group inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-700 active:scale-95"
            >
              <span>Hubungi</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>

          {/* Tombol Hamburger (Mobile) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform duration-200"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu Mobile Dropdown Card */}
        {open && (
          <div className="absolute top-16 right-4 left-4 z-50 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden dark:border-slate-800 dark:bg-slate-950/95">
            <ul className="space-y-1">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800/80">
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-indigo-700 active:scale-[0.99]"
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

              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
