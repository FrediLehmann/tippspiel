import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Database } from '@/types/database.type';

type Game = Database['public']['Tables']['games']['Row'];

const initialState: { games: Game[] } = {
	games: []
};

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		setGames: (state, action: PayloadAction<Game[]>) => {
			state.games = action.payload;
		}
	}
});

export const { setGames } = gamesSlice.actions;
export const { reducer } = gamesSlice;
