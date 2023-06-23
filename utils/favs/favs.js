import apps from '../../firebase/firebase';
import { ref, get } from 'firebase/database';

const { database } = apps;

export const getUserFavorite = (userId) => {
  return get(ref(database, `users/${userId}/favorite`));
};

export const addWordToFavorite = (
  userId,
  word,
  results,
  pronunciation,
  firstDefinition
) => {
  get(ref(database, `users/${userId}/favorite`)).then((res) => {
    const { createdAt, ...rest } = res.val();
    set(ref(database, 'users/' + userId + '/favorite/'), {
      ...rest,
      [word]: [results, pronunciation, firstDefinition],
    }).catch((error) => console.log(error));
  });
};

export const removeWordFromFavorite = (userId, word) => {
  get(ref(database, `users/${userId}/favorite/`))
    .then((res) => {
      const list = res.val();
      const listLenght = Object.keys(list).length;
      const now = new Date().toISOString();

      if (listLenght === 1) {
        set(ref(database, `users/${userId}/favorite/`), {
          createdAt: now,
        }).catch((error) => console.log(error));
        remove(ref(database, `users/${userId}/favorite/${word}`)).catch(
          (error) => console.log(error)
        );
      } else {
        remove(ref(database, `users/${userId}/favorite/${word}`)).catch(
          (error) => console.log(error)
        );
      }
    })
    .catch((error) => console.log(error));
};
