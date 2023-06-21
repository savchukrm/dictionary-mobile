import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Hat, WordBlock } from '../components';

import { getUserList } from '../utils/lists/lists';
import { setList, clearList } from '../redux/list/slice';

import { COLORS, FONTS } from '../constants';

const ListScreen = ({ route }) => {
  const dispatch = useDispatch();

  const { listname } = route.params;

  const { id } = useSelector((state) => state.user);
  const { list } = useSelector((state) => state.list);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id !== null) {
      const fetchList = async () => {
        try {
          const res = await getUserList(id, listname);
          if (res.val() !== undefined) {
            const userListsArray = Object.entries(res.val());
            dispatch(setList(userListsArray));
            setIsLoading(false);
          } else {
            dispatch(clearList());
            setIsLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchList();
    }
  }, [id, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{listname}</Text>

      <Hat />

      {isLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        list.map((item, i) => {
          const [word, content] = item;

          const [meanings, { all: pronunciation }, mainDefinition] = content;

          return (
            <>
              {word === 'createdAt' ? (
                <Text style={styles.warning}>
                  You do not have any saved items in the current list !
                </Text>
              ) : (
                <WordBlock
                  key={i}
                  word={word}
                  definition={mainDefinition}
                  pronunciation={pronunciation}
                />
              )}
            </>
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

export default ListScreen;
