"use server";

import { getTranslations } from "next-intl/server";

import { createServerClient } from "@/lib/supabase/createServerClient";

import { getFormSchema } from "./getFormSchema";

export async function resetPassword(userData: unknown, locale: string) {
  "use server";

  try {
    const t = await getTranslations({ locale });

    const formSchema = getFormSchema(t);

    const { password } = formSchema.parse(userData);

    const supabase = createServerClient();

    const { error } = await supabase.auth.updateUser({ password });

    if (error) throw error;

    return { success: true };
  } catch (error) {
    return { success: false, message: (error as { message: string }).message };
  }
}
