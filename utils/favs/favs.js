import apps from '../../firebase/firebase';
import { ref, get } from 'firebase/database';

const { database } = apps;

export const getUserFavorite = (userId) => {
  return get(ref(database, `users/${userId}/favorite`));
};
