import { createSelector } from '@reduxjs/toolkit';

const selectedPredictionGame = createSelector(
	[(state) => state.games, (state) => state.selectedGame],
	(games, selectedGame) => games.find((game: { id: string }) => game.id === selectedGame)
);

export { selectedPredictionGame };
