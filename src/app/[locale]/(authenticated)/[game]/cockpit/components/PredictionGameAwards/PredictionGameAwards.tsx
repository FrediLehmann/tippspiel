'use client';

import { TrophyIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

export default function PredictionGameAwards() {
	const t = useTranslations();

	return (
		<Button className="relative w-full md:w-auto" variant="outline">
			<TrophyIcon className="mr-2 h-5 w-5" />
			{t('Cockpit.rewards')}
			<div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-red-600 pt-[1px] text-sm text-white">
				2
			</div>
		</Button>
	);
}
