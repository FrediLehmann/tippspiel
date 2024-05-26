import { getTranslations } from "next-intl/server";

import { LoginCard } from "./components";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Login.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Login({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // use redirectUrl to redirect user back to the page they were on before logging in
  const redirectUrl = searchParams?.redirect;

  return (
    <main className="max-w-md mx-auto px-2 pb-6 mt-8 md:mt-24">
      <h1 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
        Tippspiel
      </h1>
      <LoginCard />
    </main>
  );
}
