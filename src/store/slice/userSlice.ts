import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoginResponse, User } from '../../helpers/types';

export interface UserState {
  user: User;
  jwt: string;
}

const initialState: UserState = {
  user: {} as User,
  jwt: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;
    },
    logout: (state) => {
      state.user = {} as User;
      state.jwt = '';
    }
  }
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
