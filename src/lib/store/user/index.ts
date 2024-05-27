import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  user_id: string;
  email: string;
  name: string;
  signedId: boolean;
  communicationLanguage: string;
}

const initialState: User = {
  user_id: "",
  email: "",
  name: "",
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
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setUser, setSignedIn, setUserName } = userSlice.actions;
export const { reducer } = userSlice;
