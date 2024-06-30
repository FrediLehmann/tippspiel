'use client';

import { useTranslations } from 'next-intl';

export default function Points() {
	const t = useTranslations();

	return (
		<div className="border-r-2 border-t-2 border-white px-8 py-3 text-center md:border-t-0 md:py-4">
			<div className="text-lg font-bold md:text-xl">675</div>
			<div className="text-neutral-700">{t('Cockpit.stats.points')}</div>
		</div>
	);
}
