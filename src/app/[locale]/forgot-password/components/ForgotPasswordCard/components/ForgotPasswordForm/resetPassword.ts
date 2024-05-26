"use server";

import { getTranslations } from "next-intl/server";

import { createServerClient } from "@/lib/supabase/createServerClient";

import { getFormSchema } from "./getFormSchema";

export async function resetPassword(
  userData: unknown,
  locale: string,
  host: string,
) {
  "use server";

  try {
    const t = await getTranslations({ locale });

    const formSchema = getFormSchema(t);

    const { email } = formSchema.parse(userData);

    const supabase = createServerClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${host}/${locale}/reset-password`,
    });

    if (error) throw error;

    return { success: true };
  } catch (error) {
    return { success: false, message: (error as { message: string }).message };
  }
}
