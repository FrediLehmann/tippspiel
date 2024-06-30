import { createSelector } from '@reduxjs/toolkit';

const selectedPredictionGame = createSelector(
	[(state) => state.predictionGames.games, (state) => state.predictionGames.selectedGame],
	(games, selectedGame) => games.find((game: { id: string }) => game.id === selectedGame)
);

export { selectedPredictionGame };
