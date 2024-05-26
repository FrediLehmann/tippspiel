"use client";

import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

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
      </CardContent>
    </Card>
  );
}
