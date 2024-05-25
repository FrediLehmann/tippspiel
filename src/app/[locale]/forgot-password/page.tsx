import { getTranslations } from "next-intl/server";

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
  return <></>;
}
