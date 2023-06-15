import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { COLORS, FONTS } from '../../constants';

const Favourites = ({ length }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.text}>Favourites</Text>
      <Text style={styles.text}>
        {length === 1 ? `${length} word` : `${length} words`}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    height: 132,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkgreen,
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
});

export default Favourites;
