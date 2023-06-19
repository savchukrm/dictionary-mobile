import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getUserFavorite } from '../utils/favs/favs';
import { getUserLists } from '../utils/lists/lists';
import { setFav } from '../redux/fav/slice';
import { setLists } from '../redux/lists/slice';

import { AllBlocks, ListHeader } from '../components';

import { COLORS, FONTS } from '../constants';

const Lists = () => {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    if (id !== null) {
      getUserFavorite(id)
        .then((res) => {
          if (res.val() != null) {
            dispatch(setFav(Object.entries(res.val())));
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  useEffect(() => {
    if (id !== null) {
      const fetchData = async () => {
        try {
          const res = await getUserLists(id);

          if (res.val() !== undefined && res.val() !== null) {
            const userListsArray = Object.keys(res.val()).map((key) => [
              key,
              res.val()[key],
            ]);
            dispatch(setLists(userListsArray));
          } else {
            dispatch(setLists([]));
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [dispatch, id]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkblue,
      }}
    >
      <View style={styles.top}>
        <Text style={styles.header}>All lists</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <ListHeader />
      </View>

      <AllBlocks />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    padding: 20,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.white,
  },
  header: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
});

export default Lists;
