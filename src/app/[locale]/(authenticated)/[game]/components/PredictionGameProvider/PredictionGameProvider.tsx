'use client';

import { useRef } from 'react';

import { useAppStore } from '@/lib/store';
import { setGame } from '@/lib/store/predictionGame';
import { PredictionGame } from '@/types/PredictionGame.type';

export default function PredictionGameProvider({
	game,
	children
}: {
	game: PredictionGame;
	children: React.ReactNode;
}) {
	const initialized = useRef(false);

	const store = useAppStore();
	if (!initialized.current) {
		store.dispatch(
			setGame({
				id: game.id,
				team: game.team,
				name: game.name,
				slug: game.slug
			})
		);
		initialized.current = true;
	}

	return <>{children}</>;
}
