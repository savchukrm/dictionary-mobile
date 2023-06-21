import { configureStore } from '@reduxjs/toolkit';

import data from './data/slice';
import user from './user/slice';
import fav from './fav/slice';
import lists from './lists/slice';
import list from './list/slice';

export const store = configureStore({
  reducer: { data, user, fav, lists, list },
});
