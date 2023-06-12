import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  id: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = user.actions;

export default user.reducer;
