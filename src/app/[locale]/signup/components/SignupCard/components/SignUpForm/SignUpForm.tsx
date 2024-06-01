"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { PasswordInput } from "@/components";
import { useRouter } from "@/lib/translation";

import { getFormSchema } from "./getFormSchema";
import { signUp } from "./signUp";

export default function SignUpForm() {
  const t = useTranslations();
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);

  const router = useRouter();

  const { toast } = useToast();

  const formSchema = getFormSchema(t);
  type FormSchema = z.infer<typeof formSchema>;
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  function onSubmit(values: FormSchema) {
    startTransition(() => {
      async function signMeUp() {
        try {
          const result = await signUp(values, locale);
          if (!result.success) {
            throw new Error("Could not sign up");
          }

          toast({
            title: t("common.signUpForm.signupSuccessToast.title"),
            description: t("common.signUpForm.signupSuccessToast.description"),
            duration: 15000,
          });

          router.push("/login");
        } catch (e) {
          setError(true);
        }
      }

      signMeUp();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3 md:space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("common.signUpForm.email.label")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("common.signUpForm.password.label")}</FormLabel>
                <FormControl>
                  <PasswordInput autoComplete="new-password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("common.signUpForm.passwordConfirmation.label")}
                </FormLabel>
                <FormControl>
                  <PasswordInput autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-7 w-full" disabled={isPending}>
          {!isPending ? (
            <LogInIcon className="mr-2 h-5 w-5" />
          ) : (
            <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
          )}
          {t("common.signup")}
        </Button>
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>
              {t("common.signUpForm.signupFailAlert.title")}
            </AlertTitle>
            <AlertDescription>
              {t("common.signUpForm.signupFailAlert.description")}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}
