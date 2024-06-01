import { getTranslations } from "next-intl/server";

import {
  CurrentRank,
  PredictionGameAwards,
  PredictionGameSelect,
  PredictionGameStats,
  UpcomingGames,
} from "./components";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Cockpit.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Cockpit() {
  return (
    <main className="container max-w-7xl mx-auto mt-6 md:mt-10 mb-4">
      <div className="mb-4 box md:flex justify-between space-y-2 md:space-y-0">
        <PredictionGameSelect />
        <PredictionGameAwards />
      </div>
      <PredictionGameStats />
      <div className="flex">
        <UpcomingGames />
        <div className="w-full md:w-72">
          <CurrentRank />
        </div>
      </div>
    </main>
  );
}
