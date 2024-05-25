"use client";

import { useTranslations } from "next-intl";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";
import { FacebookIcon, GoogleIcon } from "@/components/Icons";
import { Link } from "@/lib/translation";

import { SignInForm } from "./components";

export default function LoginCard() {
  const t = useTranslations();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("Login.pageTitle")}</CardTitle>
        <CardDescription>{t("Login.pageDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
        <div className="mt-4 items-center text-center text-sm text-neutral-600">
          <span>{t("Login.signupRedirect")}</span>
          <Button asChild variant="link" className="px-1">
            <Link href="/signup">{t("Login.signup")}</Link>
          </Button>
        </div>
        <div className="flex items-center mt-8 mb-10">
          <Separator className="shrink" />
          <span className="mx-3 text-nowrap text-sm">
            {t("Login.sozialLogin.separator")}
          </span>
          <Separator className="shrink" />
        </div>
        <div className="flex flex-col space-y-2">
          <Button variant="outline">
            <GoogleIcon />
            <span className="ml-2">Google</span>
          </Button>
          <Button variant="outline">
            <FacebookIcon />
            <span className="ml-2">Facebook</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
