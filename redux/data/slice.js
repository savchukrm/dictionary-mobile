import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './action';

const initialState = {
  word: {
    results: [{ definition: '', partOfSpeech: '', synonyms: [] }],
    pronunciation: { all: '' },
    word: '',
  },
  status: '',
};

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.word = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = 'loading';
      state.word = {
        results: [{ definition: '', partOfSpeech: '', synonyms: [] }],
        pronunciation: { all: '' },
        word: '',
      };
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'success';
      state.word = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'error';
      state.word = {
        results: [{ definition: '', partOfSpeech: '', synonyms: [] }],
        pronunciation: { all: '' },
        word: '',
      };
    });
  },
});

export const { setData } = data.actions;

export default data.reducer;
