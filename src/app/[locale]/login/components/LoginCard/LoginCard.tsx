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
import { createBrowserClient } from "@/lib/supabase/createBrowserClient";

import { SignInForm } from "./components";

export default function LoginCard() {
  const t = useTranslations();

  const supabase = createBrowserClient();

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("Login.pageTitle")}</CardTitle>
        <CardDescription>{t("Login.pageDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
        <div className="mt-3 md:mt-4 items-center text-center text-sm text-neutral-600">
          <span>{t("Login.signupRedirect")}</span>
          <Button asChild variant="link" className="px-1">
            <Link href="/signup">{t("Login.signup")}</Link>
          </Button>
        </div>
        <div className="flex items-center mt-6 md:mt-8 mb-8 md:mb-10">
          <Separator className="shrink" />
          <span className="pb-[2px] mx-3 text-nowrap text-sm text-neutral-600">
            {t("Login.sozialLogin.separator")}
          </span>
          <Separator className="shrink" />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-3">
          <Button variant="outline" onClick={signInWithGoogle}>
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
