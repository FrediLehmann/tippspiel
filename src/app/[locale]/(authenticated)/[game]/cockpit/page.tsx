import { getTranslations } from 'next-intl/server';

import { ProvideMessages } from '@/components';
import { createServerClient } from '@/lib/supabase/createServerClient';

import {
	CurrentRank,
	PredictionGameAwards,
	PredictionGameSelect,
	PredictionGameStats,
	UpcomingGames
} from './components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
	const t = await getTranslations({ locale, namespace: 'Cockpit.metadata' });

	return {
		title: t('title'),
		description: t('description')
	};
}

export default async function Cockpit() {
	const supabase = createServerClient();

	const { data: games, error: gamesError } = await supabase.from('games').select('*');

	return (
		<ProvideMessages namespaces={['common', 'Cockpit']}>
			<main className="container mx-auto mb-4 mt-6 max-w-7xl md:mt-10">
				<div className="box mb-4 justify-between space-y-2 md:flex md:space-y-0">
					<PredictionGameSelect />
					<PredictionGameAwards />
				</div>
				<PredictionGameStats />
				<div className="mt-6 flex flex-col justify-stretch gap-8 md:mt-10 md:flex-row">
					<UpcomingGames />
					<CurrentRank />
				</div>
			</main>
		</ProvideMessages>
	);
}
