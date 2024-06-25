'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { Link } from '@/lib/translation';

export default function Title() {
	const t = useTranslations();

	return (
		<div className="mb-4 flex items-center justify-between">
			<div className="text-lg font-semibold">{t('Cockpit.games.title')}</div>
			<Button asChild variant="outline">
				<Link href="/">{t('Cockpit.games.allGames')}</Link>
			</Button>
		</div>
	);
}
