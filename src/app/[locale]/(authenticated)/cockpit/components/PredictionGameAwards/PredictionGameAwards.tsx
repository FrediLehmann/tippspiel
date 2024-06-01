"use client";

import { TrophyIcon } from "lucide-react";

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function PredictionGameAwards() {
  const t = useTranslations();

  return (
    <Button className="w-full md:w-auto relative" variant="outline">
      <TrophyIcon className="w-5 h-5 mr-2" />
      {t("Cockpit.rewards")}
      <div className="absolute rounded-full bg-red-600 text-white -top-3 -right-3 w-6 h-6 text-sm pt-[1px]">
        2
      </div>
    </Button>
  );
}
