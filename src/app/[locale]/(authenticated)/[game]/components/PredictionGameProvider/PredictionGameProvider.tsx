'use client';

import { useRef } from 'react';

import { setSelectedPredictionGame, useAppStore } from '@/lib/store';

export default function PredictionGameProvider({
	selectedGame,
	children
}: {
	selectedGame: number;
	children: React.ReactNode;
}) {
	const initialized = useRef(false);

	const store = useAppStore();
	if (!initialized.current) {
		store.dispatch(setSelectedPredictionGame(selectedGame));
		initialized.current = true;
	}

	return <>{children}</>;
}
