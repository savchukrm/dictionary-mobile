import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getUserFavorite } from '../utils/favs/favs';

import { Hat, WordBlock } from '../components';

import { setFav } from '../redux/fav/slice';

import { COLORS, FONTS } from '../constants';

const Favourite = () => {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.user);
  const { fav } = useSelector((state) => state.fav);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id !== null) {
      getUserFavorite(id)
        .then((res) => {
          if (res.val() != null) {
            dispatch(setFav(Object.entries(res.val())));
            setIsLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.darkblue,
      }}
    >
      <Text style={styles.title}>Favourites</Text>

      <Hat />

      {isLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        fav.map((item, i) => {
          const [word, content] = item;

          const [meanings, { all: pronunciation }, mainDefinition] = content;

          return (
            <React.Fragment key={i}>
              {word === 'createdAt' ? (
                <Text style={styles.warning}>
                  You do not have any saved items in the current list!
                </Text>
              ) : (
                <WordBlock
                  word={word}
                  definition={mainDefinition}
                  pronunciation={pronunciation}
                />
              )}
            </React.Fragment>
          );
        })
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.darkblue,
  },
  title: {
    fontSize: 23,
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
  loading: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
  warning: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
});

export default Favourite;
