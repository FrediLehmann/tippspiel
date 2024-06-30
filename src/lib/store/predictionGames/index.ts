import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PredictionGame } from '@/types/PredictionGame.type';

const initialState: { games: PredictionGame[]; selectedGame: number } = {
	games: [],
	selectedGame: 0
};

const predictionGameSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setGames: (state, action: PayloadAction<PredictionGame[]>) => {
			state.games = action.payload;
		},
		setSelectedGame: (state, action: PayloadAction<number>) => {
			state.selectedGame = action.payload;
		}
	}
});

export const { setGames, setSelectedGame } = predictionGameSlice.actions;
export const { reducer } = predictionGameSlice;
