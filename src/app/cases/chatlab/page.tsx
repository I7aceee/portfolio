import { cases } from "@/shared/config/cases";
import { CaseLayout } from "@/widgets/case-layout/ui/CaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatlab — Максим",
};

export default function ChatlabPage() {
  const caseData = cases.find((c) => c.slug === "chatlab")!;
  const nextCase = cases.find((c) => c.slug === "bfl");

  return (
    <CaseLayout
      caseData={caseData}
      nextCase={nextCase ? { slug: nextCase.slug, title: nextCase.title } : undefined}
    />
  );
}
