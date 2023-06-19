import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ createItem }) => {
  // createItem - future function to create a new item as new list or folder for user
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '90%',
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={33} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="add" size={33} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
