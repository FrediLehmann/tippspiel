import { notFound } from 'next/navigation';

import { createServerClient } from '@/lib/supabase/createServerClient';

import { GamesProvider, PredictionGameProvider } from './components';

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
		.select('id')
		.eq('slug', game)
		.single();

	if (!predictionGame || predictionGameError) notFound();

	const { data: games } = await supabase
		.from('games')
		.select('*')
		.eq('prediction_game', predictionGame.id);

	return (
		<PredictionGameProvider selectedGame={predictionGame.id}>
			<GamesProvider games={games || []}>{children}</GamesProvider>
		</PredictionGameProvider>
	);
}
