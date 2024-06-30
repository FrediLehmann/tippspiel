import { notFound } from 'next/navigation';

import { createServerClient } from '@/lib/supabase/createServerClient';

import { PredictionGameProvider } from './components';

export default async function GameLayout({
	params: { game },
	children
}: {
	params: {
		game: string;
	};
	children: React.ReactNode;
}) {
	const supabase = createServerClient();

	const { data: predictionGame, error: predictionGameError } = await supabase
		.from('prediction_games')
		.select('id, team, name, slug')
		.eq('slug', game)
		.single();

	if (!predictionGame || predictionGameError) notFound();

	const { data: team } = await supabase
		.from('teams')
		.select('name')
		.eq('id', predictionGame.team)
		.single();

	return (
		<PredictionGameProvider
			game={{
				id: predictionGame.id,
				team: team?.name || '',
				name: predictionGame.name,
				slug: predictionGame.slug
			}}>
			{children}
		</PredictionGameProvider>
	);
}
