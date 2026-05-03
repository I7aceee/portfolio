import { cases } from "@/shared/config/cases";
import { CaseLayout } from "@/widgets/case-layout/ui/CaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minato — Максим",
};

export default function MinatoPage() {
  const caseData = cases.find((c) => c.slug === "minato")!;
  const nextCase = cases.find((c) => c.slug === "jas");

  return (
    <CaseLayout
      caseData={caseData}
      nextCase={nextCase ? { slug: nextCase.slug, title: nextCase.title } : undefined}
    />
  );
}
