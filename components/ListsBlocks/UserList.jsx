import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS } from '../../constants';

const UserList = ({ title, length }) => {
  const navigation = useNavigation();

  const onPressUserList = () => {
    navigation.navigate('List', { listname: title });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPressUserList}>
      <Text style={styles.text}>{title}</Text>
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
    backgroundColor: COLORS.teal,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
});

export default UserList;
