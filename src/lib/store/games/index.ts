import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { games: [] } = {
	games: []
};

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		setGames: (state, action: PayloadAction<[]>) => {
			state.games = action.payload;
		}
	}
});

export const { setGames } = gamesSlice.actions;
export const { reducer } = gamesSlice;
