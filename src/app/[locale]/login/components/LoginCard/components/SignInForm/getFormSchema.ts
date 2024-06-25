import * as z from 'zod';

import { passwordRegex } from '@/lib/helpers/string';

export function getFormSchema(t: (key: string) => string) {
	return z
		.object({
			email: z
				.string()
				.min(1, {
					message: t('common.signInForm.formSchemaMessages.email.required')
				})
				.email({
					message: t('common.signInForm.formSchemaMessages.email.validated')
				}),
			password: z
				.string()
				.min(1, {
					message: t('common.signInForm.formSchemaMessages.password.required')
				})
				.min(8, {
					message: t('common.signInForm.formSchemaMessages.password.minLength')
				})
				.max(100, {
					message: t('common.signInForm.formSchemaMessages.password.maxLength')
				})
				.regex(passwordRegex, {
					message: t('common.signInForm.formSchemaMessages.password.pattern')
				})
		})
		.required();
}
