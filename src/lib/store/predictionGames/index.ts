import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PredictionGame } from '@/types/PredictionGame.type';

const initialState: { games: PredictionGame[]; selectedGame: number } = {
	games: [],
	selectedGame: 0
};

const predictionGameSlice = createSlice({
	name: 'predictionGames',
	initialState,
	reducers: {
		setPredictionGames: (state, action: PayloadAction<PredictionGame[]>) => {
			state.games = action.payload;
		},
		setSelectedPredictionGame: (state, action: PayloadAction<number>) => {
			state.selectedGame = action.payload;
		}
	}
});

export const { setPredictionGames, setSelectedPredictionGame } = predictionGameSlice.actions;
export const { reducer } = predictionGameSlice;
