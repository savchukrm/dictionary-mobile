import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { COLORS, FONTS } from '../../constants';

const WordBlock = ({ word, definition, pronunciation }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.word}>{word}</Text>

      {pronunciation && (
        <Text style={styles.pronunciation}>/{pronunciation}/</Text>
      )}

      <Text style={styles.definition}>{definition}</Text>
    </View>
  );
};

export default WordBlock;

const styles = StyleSheet.create({
  block: {
    width: '90%',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: COLORS.greysecond,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  word: {
    fontSize: 15,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    textTransform: 'capitalize',
  },
  pronunciation: {
    marginBottom: 10,
    marginTop: 5,
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.light,
  },
  definition: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: FONTS.light,
  },
});
