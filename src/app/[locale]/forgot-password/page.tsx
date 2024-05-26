import { getTranslations } from "next-intl/server";

import { ForgotPasswordCard } from "./components";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "ForgotPassword.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ForgotPasswordPage() {
  return (
    <main className="max-w-md mx-auto px-2 pb-6 mt-8 md:mt-24">
      <h1 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
        Tippspiel
      </h1>
      <ForgotPasswordCard />
    </main>
  );
}
