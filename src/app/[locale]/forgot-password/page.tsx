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
    <main className="mx-auto mt-8 max-w-md px-2 pb-6 md:mt-24">
      <h1 className="mb-8 text-center text-xl font-bold md:mb-12 md:text-3xl">
        Tippspiel
      </h1>
      <ForgotPasswordCard />
    </main>
  );
}
