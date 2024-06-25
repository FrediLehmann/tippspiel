import * as z from 'zod';

import { passwordRegex } from '@/lib/helpers/string';

export function getFormSchema(t: (key: string) => string) {
	return z
		.object({
			email: z
				.string()
				.min(1, {
					message: t('common.signUpForm.formSchemaMessages.email.required')
				})
				.email({
					message: t('common.signUpForm.formSchemaMessages.email.validated')
				}),
			password: z
				.string()
				.min(1, {
					message: t('common.signUpForm.formSchemaMessages.password.required')
				})
				.min(8, {
					message: t('common.signUpForm.formSchemaMessages.password.minLength')
				})
				.max(100, {
					message: t('common.signUpForm.formSchemaMessages.password.maxLength')
				})
				.regex(passwordRegex, {
					message: t('common.signUpForm.formSchemaMessages.password.pattern')
				}),
			passwordConfirmation: z.string()
		})
		.required()
		.refine((data) => data.password === data.passwordConfirmation, {
			message: t('common.signUpForm.formSchemaMessages.passwordConfirmation.match'),
			path: ['passwordConfirmation']
		});
}
