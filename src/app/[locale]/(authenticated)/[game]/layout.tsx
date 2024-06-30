import { notFound } from 'next/navigation';

import { createServerClient } from '@/lib/supabase/createServerClient';

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
		.select('*')
		.eq('slug', game)
		.single();

	if (predictionGameError) notFound();

	return <>{children}</>;
}
