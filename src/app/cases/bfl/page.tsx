import { cases } from "@/shared/config/cases";
import { CaseLayout } from "@/widgets/case-layout/ui/CaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "БФЛ.топ — Максим",
};

export default function BflPage() {
  const caseData = cases.find((c) => c.slug === "bfl")!;
  const nextCase = cases.find((c) => c.slug === "minato");

  return (
    <CaseLayout
      caseData={caseData}
      nextCase={nextCase ? { slug: nextCase.slug, title: nextCase.title } : undefined}
    />
  );
}
