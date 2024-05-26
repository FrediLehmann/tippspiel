"use client";

import { useTranslations } from "next-intl";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Link } from "@/lib/translation";

import { ForgotPasswordForm } from "./components";

export default function ForgotPasswordCard() {
  const t = useTranslations();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("ForgotPassword.passwordForm.cardTitle")}</CardTitle>
        <CardDescription>
          {t("ForgotPassword.passwordForm.cardDescription")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
        <div className="mt-3 md:mt-4 items-center text-center text-sm text-neutral-600">
          <span>{t("ForgotPassword.signinRedirect")}</span>
          <Button asChild variant="link" className="px-1">
            <Link href="/signup">{t("ForgotPassword.signin")}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
