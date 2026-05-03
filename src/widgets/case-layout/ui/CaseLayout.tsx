"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Case } from "@/shared/config/cases";
import { fadeInUp, stagger } from "@/shared/lib/motion";

interface Props {
  caseData: Case;
  nextCase?: { slug: string; title: string };
}

const sections = (c: Case) => [
  { label: "Проблема", text: c.problem },
  { label: "Решение", text: c.solution },
  { label: "Результат", text: c.result },
];

function ImagePlaceholder() {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-white/[0.05] bg-neutral-900/60">
      <span className="text-sm text-neutral-700">Скриншоты проекта</span>
    </div>
  );
}

export function CaseLayout({ caseData, nextCase }: Props) {
  const [heroImage, ...restImages] = caseData.images ?? [];

  return (
    <>
      {/* Minimal top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Назад
          </Link>
          <span className="text-xs text-neutral-700">{caseData.index}</span>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-28 pt-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10"
        >
          {/* Hero header */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-600">
              {caseData.index}
            </span>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-none tracking-tight text-[#f0f0f0]">
              {caseData.title}
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-neutral-400">
              {caseData.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex flex-wrap gap-2">
                {caseData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {caseData.liveUrl && (
                <a
                  href={caseData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
                >
                  Открыть сайт
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div variants={fadeInUp}>
            {heroImage ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.05]">
                <Image
                  src={heroImage}
                  alt={`${caseData.title} — главный скриншот`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            ) : (
              <ImagePlaceholder />
            )}
          </motion.div>

          {/* Content sections */}
          <motion.div variants={stagger} className="flex flex-col gap-16">
            {sections(caseData).map((section) => (
              <motion.div
                key={section.label}
                variants={fadeInUp}
                className="grid gap-6 md:grid-cols-[180px_1fr]"
              >
                <div className="pt-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                    {section.label}
                  </span>
                </div>
                <p className="text-[1.05rem] leading-[1.8] text-neutral-300">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Extra screenshots grid */}
          {restImages.length > 0 && (
            <motion.div variants={fadeInUp}>
              <div
                className={`grid gap-4 ${
                  restImages.length === 1
                    ? "grid-cols-1"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {restImages.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.05]"
                  >
                    <Image
                      src={src}
                      alt={`${caseData.title} — скриншот ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Footer nav */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-between border-t border-white/[0.06] pt-10"
          >
            <Link
              href="/#cases"
              className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
              Все кейсы
            </Link>
            {nextCase && (
              <Link
                href={`/cases/${nextCase.slug}`}
                className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
              >
                {nextCase.title}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
