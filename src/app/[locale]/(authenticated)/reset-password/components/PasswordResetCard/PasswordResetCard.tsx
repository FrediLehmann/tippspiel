'use client';

import { useTranslations } from 'next-intl';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

import { PasswordResetForm } from './components';

export default function PasswordResetCard() {
	const t = useTranslations();
	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('ResetPassword.resetForm.cardTitle')}</CardTitle>
				<CardDescription>{t('ResetPassword.resetForm.cardDescription')}</CardDescription>
			</CardHeader>
			<CardContent>
				<PasswordResetForm />
			</CardContent>
		</Card>
	);
}
