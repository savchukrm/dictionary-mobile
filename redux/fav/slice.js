import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fav: [],
};

const fav = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    setFav(state, action) {
      state.fav = action.payload;
    },
    clearFav(state) {
      state.fav = [];
    },
  },
});

export const { setFav, clearFav } = fav.actions;

export default fav.reducer;
