import * as z from "zod";

export function getFormSchema(t: (key: string) => string) {
  return z
    .object({
      email: z
        .string()
        .min(1, {
          message: t(
            "common.forgotPasswordForm.formSchemaMessages.email.required",
          ),
        })
        .email({
          message: t(
            "common.forgotPasswordForm.formSchemaMessages.email.validated",
          ),
        }),
    })
    .required();
}
