'use client';

import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui';

export default function NotFoundContent() {
	const t = useTranslations('404');
	return (
		<div className="flex gap-6 mt-20 mx-auto items-center mx-auto">
			<div className="font-semibold text-lg">404</div>
			<Separator orientation="vertical" className="h-20" />
			<div>
				<h1 className="text-lg font-semibold">{t('notFoundTitle')}</h1>
				<p>{t('notFoundDescription')}</p>
			</div>
		</div>
	);
}
