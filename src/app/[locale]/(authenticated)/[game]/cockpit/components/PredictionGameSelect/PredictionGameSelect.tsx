'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import {
	selectedPredictionGame,
	setSelectedPredictionGame,
	useAppDispatch,
	useAppSelector
} from '@/lib/store';

export default function PredictionGameStats() {
	const dispatch = useAppDispatch();
	const selectedGame = useAppSelector(selectedPredictionGame);
	const games = useAppSelector((state) => state.predictionGames.games);

	return (
		<Select
			value={selectedGame?.id.toString() ?? '0'}
			onValueChange={(value) => dispatch(setSelectedPredictionGame(Number(value)))}>
			<SelectTrigger className="w-full md:w-96">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{games.map((game) => (
					<SelectItem key={game.id} value={game.id.toString()}>
						{game.name} ({game.team})
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
