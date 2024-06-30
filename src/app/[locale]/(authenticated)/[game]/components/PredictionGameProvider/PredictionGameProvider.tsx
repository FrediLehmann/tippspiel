'use client';

import { useRef } from 'react';

import { setSelectedGame, useAppStore } from '@/lib/store';

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
		store.dispatch(setSelectedGame(selectedGame));
		initialized.current = true;
	}

	return <>{children}</>;
}
