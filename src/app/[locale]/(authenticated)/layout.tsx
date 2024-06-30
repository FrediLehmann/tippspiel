import { createServerClient } from '@/lib/supabase/createServerClient';
import { redirect } from '@/lib/translation';

import { PredictionGameProvider } from './components';

export const dynamic = 'force-dynamic';

export default async function SignedInlayout({ children }: { children: React.ReactNode }) {
	const supabase = createServerClient();
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	const { data: games } = await supabase
		.from('prediction_games')
		.select('id, name, slug, teams(name)');

	return (
		<PredictionGameProvider
			games={
				games?.map(({ id, name, slug, teams }) => ({
					id,
					name,
					slug: slug || '',
					team: teams?.name || ''
				})) || []
			}>
			{children}
		</PredictionGameProvider>
	);
}
