import { configureStore } from '@reduxjs/toolkit';

import data from './data/slice';
import user from './user/slice';

export const store = configureStore({
  reducer: { data, user },
});
