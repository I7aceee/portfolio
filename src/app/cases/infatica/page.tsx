import { cases } from "@/shared/config/cases";
import { CaseLayout } from "@/widgets/case-layout/ui/CaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infatica — Максим",
};

export default function InfaticaPage() {
  const caseData = cases.find((c) => c.slug === "infatica")!;

  return <CaseLayout caseData={caseData} />;
}
