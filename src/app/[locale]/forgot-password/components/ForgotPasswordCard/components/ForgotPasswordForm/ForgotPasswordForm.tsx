"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircleIcon, Loader2Icon, LogInIcon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  useToast,
} from "@/components/ui";

import { getFormSchema } from "./getFormSchema";
import { resetPassword } from "./resetPassword";

export default function ForgotPasswordForm() {
  const t = useTranslations();
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);

  const { toast } = useToast();

  const formSchema = getFormSchema(t);
  type FormSchema = z.infer<typeof formSchema>;
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: FormSchema) {
    startTransition(() => {
      async function startReset() {
        try {
          const result = await resetPassword(
            values,
            locale,
            window.location.host,
          );
          if (!result.success) {
            throw new Error("Could not sign up");
          }

          toast({
            title: t("common.forgotPasswordForm.resetSuccessToast.title"),
            description: t(
              "common.forgotPasswordForm.resetSuccessToast.description",
            ),
          });

          setError(false);
        } catch (e) {
          setError(true);
        }
      }

      startReset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("common.forgotPasswordForm.email.label")}
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-7" disabled={isPending}>
          {!isPending ? (
            <LogInIcon className="mr-2 h-5 w-5" />
          ) : (
            <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
          )}
          {t("common.resetPassword")}
        </Button>
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>
              {t("common.forgotPasswordForm.resetFailedAlert.title")}
            </AlertTitle>
            <AlertDescription>
              {t("common.forgotPasswordForm.resetFailedAlert.description")}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}
