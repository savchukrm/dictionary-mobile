import apps from '../../firebase/firebase';
import { ref, get } from 'firebase/database';

const { database } = apps;

export const getUserLists = (userId) => {
  return get(ref(database, `users/${userId}/lists`));
};

export const getUserList = (userId, name) => {
  return get(ref(database, `users/${userId}/lists/${name}`));
};
