import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PredictionGame } from '@/types/PredictionGame.type';

const initialState: PredictionGame = {
	id: '',
	team: '',
	name: '',
	slug: ''
};

const predictionGameSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setGame: (_, action: PayloadAction<PredictionGame>) => {
			return action.payload;
		}
	}
});

export const { setGame } = predictionGameSlice.actions;
export const { reducer } = predictionGameSlice;
