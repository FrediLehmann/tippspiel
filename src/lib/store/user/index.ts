import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  email: string;
  signedId: boolean;
  communicationLanguage: string;
};

const initialState: User = {
  id: "",
  email: "",
  signedId: false,
  communicationLanguage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => {
      return action.payload;
    },
    setSignedIn: (state, action: PayloadAction<boolean>) => {
      state.signedId = action.payload;
    },
  },
});

export const { setUser, setSignedIn } = userSlice.actions;
export const { reducer } = userSlice;
