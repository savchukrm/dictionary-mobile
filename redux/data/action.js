import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchData = createAsyncThunk(
  'data/fetchDataStatus',
  async (param) => {
    const options = {
      method: 'GET',
      url: `https://wordapi18v1.p.rapidapi.com/words/${param}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);

    return response.data;
  }
);
