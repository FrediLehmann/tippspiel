import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircleIcon, Loader2Icon, SaveIcon } from "lucide-react";

import { useRouter } from "@/lib/translation";
import { PasswordInput } from "@/components";
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
} from "@/components/ui";

import { getFormSchema } from "./getFormSchema";
import { resetPassword } from "./resetPassword";

export default function PasswordResetForm() {
  const t = useTranslations();
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);

  const router = useRouter();

  const formSchema = getFormSchema(t);
  type FormSchema = z.infer<typeof formSchema>;
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  function onSubmit(values: FormSchema) {
    startTransition(() => {
      async function saveNewPassword() {
        try {
          const result = await resetPassword(values, locale);
          if (!result.success) throw new Error("Could not sign in");
          router.push("/account");
        } catch (e) {
          setError(true);
        }
      }

      saveNewPassword();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3 md:space-y-5">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("common.resetPasswordForm.password.label")}
                </FormLabel>
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
                  {t("common.resetPasswordForm.passwordConfirmation.label")}
                </FormLabel>
                <FormControl>
                  <PasswordInput autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-7" disabled={isPending}>
          {!isPending ? (
            <SaveIcon className="mr-2 h-5 w-5" />
          ) : (
            <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
          )}
          {t("common.saveNewPassword")}
        </Button>
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>
              {t("common.resetPasswordForm.signupFailAlert.title")}
            </AlertTitle>
            <AlertDescription>
              {t("common.resetPasswordForm.signupFailAlert.description")}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}
