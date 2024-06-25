import * as z from 'zod';

import { passwordRegex } from '@/lib/helpers/string';

export function getFormSchema(t: (key: string) => string) {
	return z
		.object({
			password: z
				.string()
				.min(1, {
					message: t('common.resetPasswordForm.formSchemaMessages.password.required')
				})
				.min(8, {
					message: t('common.resetPasswordForm.formSchemaMessages.password.minLength')
				})
				.max(100, {
					message: t('common.resetPasswordForm.formSchemaMessages.password.maxLength')
				})
				.regex(passwordRegex, {
					message: t('common.resetPasswordForm.formSchemaMessages.password.pattern')
				}),
			passwordConfirmation: z.string()
		})
		.required()
		.refine((data) => data.password === data.passwordConfirmation, {
			message: t('common.resetPasswordForm.formSchemaMessages.passwordConfirmation.match'),
			path: ['passwordConfirmation']
		});
}
