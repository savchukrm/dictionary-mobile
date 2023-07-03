import apps from '../../firebase/firebase';
import { ref, get, set, remove } from 'firebase/database';

const { database } = apps;

export const getUserLists = (userId) => {
  return get(ref(database, `users/${userId}/lists`));
};

export const getUserList = (userId, name) => {
  return get(ref(database, `users/${userId}/lists/${name}`));
};

export const addWordToList = (
  userId,
  name,
  word,
  results,
  pronunciation,
  firstDefinition
) => {
  get(ref(database, `users/${userId}/lists/${name}/`))
    .then((res) => {
      const { createdAt, ...rest } = res.val();
      set(ref(database, `users/${userId}/lists/${name}`), {
        ...rest,
        [word]: [results, pronunciation, firstDefinition],
      }).catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

export const removeWordFromList = async (userId, name, word) => {
  get(ref(database, `users/${userId}/lists/${name}/`))
    .then((res) => {
      const list = res.val();
      const listLenght = Object.keys(list).length;
      const now = new Date().toISOString();

      if (listLenght === 1) {
        set(ref(database, `users/${userId}/lists/${name}`), {
          createdAt: now,
        }).catch((error) => console.log(error));
        remove(ref(database, `users/${userId}/lists/${name}/${word}`)).catch(
          (error) => console.log(error)
        );
      } else {
        remove(ref(database, `users/${userId}/lists/${name}/${word}`)).catch(
          (error) => console.log(error)
        );
      }
    })
    .catch((error) => console.log(error));
};

export const createNewList = (userId, name) => {
  const now = new Date().toISOString();

  get(ref(database, `users/${userId}/lists/`))
    .then(() => {
      set(ref(database, `users/${userId}/lists/${name}`), {
        createdAt: now,
      }).catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};
