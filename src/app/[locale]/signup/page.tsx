import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Signup.metadata" });

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

  return <main className="max-w-md mx-auto px-2 mt-12 md:mt-24"></main>;
}
