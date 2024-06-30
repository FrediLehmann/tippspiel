import { createClient } from '@supabase/supabase-js';

import { getGames } from './data';

export async function GET(request: Request) {
	const authHeader = request.headers.get('authorization');
	if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	try {
		const supabase = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.SUPABASE_SERVICE_ROLE_KEY!
		);

		const { data: predictionGames, error: urlsError } = await supabase
			.from('prediction_games')
			.select('id, results_url, teams(name)');

		if (urlsError) {
			console.error(urlsError);
			throw urlsError;
		}

		const games = await getGames(predictionGames);

		const { error: upsertError } = await supabase.from('games').upsert(games);

		if (upsertError) {
			console.error(upsertError);
			throw upsertError;
		}

		return new Response('OK', { status: 200 });
	} catch (err) {
		return new Response('Internal Server Error', { status: 500 });
	}
}
