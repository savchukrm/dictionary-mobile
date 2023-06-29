import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/FontAwesome';

import {
  addWordToFavorite,
  removeWordFromFavorite,
  getUserFavorite,
} from '../../utils/favs/favs';

import {
  getUserLists,
  addWordToList,
  removeWordFromList,
} from '../../utils/lists/lists';

import { setLists } from '../../redux/lists/slice';

import { COLORS, FONTS } from '../../constants';

const Popup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);
  const [isInList, setIsInList] = useState();
  const [listStates, setListStates] = useState({});
  const [shouldRenderTick, setShouldRenderTick] = useState(false);

  const { id } = useSelector((state) => state.user);
  const { word } = useSelector((state) => state.data);
  const { lists } = useSelector((state) => state.lists);

  const popupRef = useRef(null);

  const [mainDefinition] = word.results;

  useEffect(() => {
    getUserFavorite(id)
      .then((res) => {
        if (res.val() !== null)
          setIsInList(Object.keys(res.val()).some((el) => el === word.word));
      })
      .catch((error) => console.log(error));
  }, [id, word.word]);

  const toggleIsInFavorite = useCallback(() => {
    const newIsInList = !isInList;
    setIsInList(newIsInList);

    if (newIsInList) {
      addWordToFavorite(
        id,
        word.word,
        word.results,
        word.pronunciation,
        mainDefinition.definition
      );
    } else {
      removeWordFromFavorite(id, word.word);
    }
  }, [id, isInList, word.results, word.word]);

  useEffect(() => {
    getUserLists(id)
      .then((res) => {
        if (res.val() !== null) dispatch(setLists(lists));

        const fetchedLists = res.val();

        const newStates = {};

        for (const [listName, listData] of Object.entries(fetchedLists || {})) {
          if (listData && Object.keys(listData).includes(word.word)) {
            newStates[listName] = { ...listData };
          }
        }

        setListStates((prev) => ({ ...prev, ...newStates }));
      })
      .catch((error) => console.log(error));
  }, [word.word, id, dispatch, lists]);

  const toggleWordInList = (listName) => {
    const wordStates = listStates[listName] || {};
    const isInList = wordStates[word.word];

    if (isInList) {
      removeWordFromList(id, listName, word.word);
    } else {
      addWordToList(
        id,
        listName,
        word.word,
        word.results,
        word.pronunciation,
        mainDefinition.definition
      );
    }

    const newListStates = {
      ...listStates,
      [listName]: {
        ...wordStates,
        [word.word]: !isInList,
      },
    };

    setListStates(newListStates);

    const shouldRenderTick =
      Object.values(newListStates).some(
        (wordStates) => wordStates[word.word]
      ) || isInList;
    setShouldRenderTick(shouldRenderTick);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Icon name="bookmark" size={40} color={COLORS.greysecond} />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.popupList}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Lists')}
            style={styles.popupItem}
          >
            <Text style={styles.popupMainText}>Create new list</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleIsInFavorite}
            style={styles.popupItem}
          >
            <Text style={styles.popupItemText}>Favourites</Text>

            {isInList ? (
              <Iconn name="check" size={20} color={COLORS.white} />
            ) : null}
          </TouchableOpacity>

          {lists.map((item, i) => {
            const [listName] = item;
            const isInList = listStates[listName];
            const shouldRenderTick = isInList?.[word.word] ?? false;

            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  toggleWordInList(listName);
                }}
                style={styles.popupItem}
              >
                <Text style={styles.popupItemText}>{listName}</Text>

                {shouldRenderTick && (
                  <Iconn name="check" size={20} color={COLORS.white} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: 1000,
  },
  popupList: {
    position: 'absolute',
    top: '100%',
    width: 200,
    right: 5,
    backgroundColor: COLORS.teal,
    padding: 12,
    borderRadius: 10,
  },
  popupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: COLORS.teal,
  },
  popupMainText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
  popupItemText: {
    color: COLORS.white,

    fontFamily: FONTS.regular,
  },
});

export default Popup;
