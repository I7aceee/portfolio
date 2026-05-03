import { cases } from "@/shared/config/cases";
import { CaseLayout } from "@/widgets/case-layout/ui/CaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAS — Максим",
};

export default function JasPage() {
  const caseData = cases.find((c) => c.slug === "jas")!;
  const nextCase = cases.find((c) => c.slug === "infatica");

  return (
    <CaseLayout
      caseData={caseData}
      nextCase={nextCase ? { slug: nextCase.slug, title: nextCase.title } : undefined}
    />
  );
}
