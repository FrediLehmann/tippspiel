"use client";

import { ArrowUpIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export default function Difference() {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "rounded-tr-xl border-r-2 border-white px-8 py-3 text-center md:rounded-none md:py-4",
        "bg-green-100 text-green-800",
      )}
    >
      <div className="flex items-center justify-center text-lg font-bold md:text-xl">
        <ArrowUpIcon className="h-5 w-5 md:h-7 md:w-7" /> 2
      </div>
      <div>{t("Cockpit.stats.difference")}</div>
    </div>
  );
}
