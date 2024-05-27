import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Home.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  return <main className="container max-w-7xl mx-auto">Home</main>;
}
