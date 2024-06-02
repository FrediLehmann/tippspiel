"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export default function Rank() {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "rounded-tl-xl px-8 py-3 text-center md:rounded-l-xl md:py-4",
        "bg-yellow-500 bg-opacity-20 text-yellow-900",
      )}
    >
      <div className="text-lg font-bold md:text-xl">
        {t("Cockpit.stats.rankNumber", { rank: 3 })}
      </div>
      <div>{t("Cockpit.stats.rank")}</div>
    </div>
  );
}
