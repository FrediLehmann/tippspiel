"use client";

import { useTranslations } from "next-intl";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Link } from "@/lib/translation";
import { ArrowLeftIcon } from "lucide-react";

export default function ErrorCard() {
  const t = useTranslations("Error");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("cardTitle")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{t("cardContent")}</p>
        <Button asChild className="w-full">
          <Link href="/">
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            {t("cardButton")}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
