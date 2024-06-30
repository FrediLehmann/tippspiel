import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User } from '@/types/User.type';

const initialState: User = {
	id: '',
	email: '',
	signedIn: false,
	communicationLanguage: ''
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (_, action: PayloadAction<User>) => {
			return action.payload;
		},
		setSignedIn: (state, action: PayloadAction<boolean>) => {
			state.signedIn = action.payload;
		}
	}
});

export const { setUser, setSignedIn } = userSlice.actions;
export const { reducer } = userSlice;
