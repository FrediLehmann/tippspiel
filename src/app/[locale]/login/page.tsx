import { getTranslations } from "next-intl/server";

import { SignInForm } from "@/components";

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
    <main>
      <SignInForm />
    </main>
  );
}
