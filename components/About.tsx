import Section from "./Section";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="tentang" title="Tentang Saya">
      <div className="space-y-4 text-slate-600 dark:text-slate-300">
        {profile.about}
      </div>
    </Section>
  );
}
