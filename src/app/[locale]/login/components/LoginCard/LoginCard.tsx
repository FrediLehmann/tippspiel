"use client";

import { useTranslations } from "next-intl";

import { SignInForm } from "@/components";
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
        <div className="mt-6 items-center text-center text-sm text-neutral-600">
          <span>{t("Login.signupRedirect")}</span>
          <Button asChild variant="link" className="px-1">
            <Link href="/signup">{t("Login.signup")}</Link>
          </Button>
        </div>
        <Separator className="my-4" />
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
