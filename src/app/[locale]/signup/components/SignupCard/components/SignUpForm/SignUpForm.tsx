"use client";

import { z } from "zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";

import { getFormSchema } from "./getFormSchema";

export default function SignUpForm() {
  const t = useTranslations();

  const formSchema = getFormSchema(t);
  type FormSchema = z.infer<typeof formSchema>;
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: FormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-5">
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
                  <Input
                    type="password"
                    autoComplete="new-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-7">
          <LogIn className="w-5 h-5 mr-2" />
          {t("common.signup")}
        </Button>
      </form>
    </Form>
  );
}