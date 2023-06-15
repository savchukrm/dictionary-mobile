import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { COLORS, FONTS } from '../../constants';

const UserFolder = ({ title, description }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    height: 132,
    width: '90%',
    borderRadius: 10,
    backgroundColor: COLORS.red,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
});

export default UserFolder;
