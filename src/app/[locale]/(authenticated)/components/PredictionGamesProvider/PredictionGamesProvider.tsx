'use client';

import { useRef } from 'react';

import { setPredictionGames, useAppStore } from '@/lib/store';
import { PredictionGame } from '@/types/PredictionGame.type';

export default function PredictionGameProvider({
	games,
	children
}: {
	games: PredictionGame[];
	children: React.ReactNode;
}) {
	const initialized = useRef(false);

	const store = useAppStore();
	if (!initialized.current) {
		store.dispatch(setPredictionGames(games));
		initialized.current = true;
	}

	return <>{children}</>;
}
