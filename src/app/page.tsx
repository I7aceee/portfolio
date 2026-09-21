import { Navbar } from "@/widgets/navbar/ui/Navbar";
import { Hero } from "@/widgets/hero/ui/Hero";
import { About } from "@/widgets/about/ui/About";
import { CasesPreview } from "@/widgets/cases-preview/ui/CasesPreview";
import { Stack } from "@/widgets/stack/ui/Stack";
import { Contact } from "@/widgets/contact/ui/Contact";
import {TestForm} from "@/widgets/form/ui";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CasesPreview />
        <Stack />
        <Contact />
        <TestForm />
      </main>
      <footer className="border-t border-white/[0.04] px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-xs text-neutral-700">© 2026 Максим</span>
          <span className="text-xs text-neutral-700">Frontend Developer</span>
        </div>
      </footer>
    </>
  );
}
