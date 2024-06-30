'use client';

import { useRef } from 'react';

import { setGames, useAppStore } from '@/lib/store';
import { Database } from '@/types/database.type';

export default function GamesProvider({
	games,
	children
}: {
	games: Database['public']['Tables']['games']['Row'][];
	children: React.ReactNode;
}) {
	const initialized = useRef(false);

	const store = useAppStore();
	if (!initialized.current) {
		store.dispatch(setGames(games));
		initialized.current = true;
	}

	return <>{children}</>;
}
