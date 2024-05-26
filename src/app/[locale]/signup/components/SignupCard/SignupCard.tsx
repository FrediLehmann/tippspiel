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

import { SignUpForm } from "./components";

export default function SignupCard() {
  const t = useTranslations();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("Signup.pageTitle")}</CardTitle>
        <CardDescription>{t("Signup.pageDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
        <div className="mt-4 md:mt-6 items-center text-center text-sm text-neutral-600">
          <span>{t("Signup.signinRedirect")}</span>
          <Button asChild variant="link" className="px-1">
            <Link href="/login">{t("Signup.signin")}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
