"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui";
import { Link } from "@/lib/translation";

export default function Title() {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-lg font-semibold">{t("Cockpit.ranklist.title")}</div>
      <Button asChild variant="outline">
        <Link href="/">{t("Cockpit.ranklist.ranking")}</Link>
      </Button>
    </div>
  );
}
