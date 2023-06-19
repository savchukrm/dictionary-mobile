import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS } from '../../constants';

const Favourites = ({ length }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Favourite')}
    >
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
    marginBottom: 20,
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
