import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Hat = ({ list }) => {
  const navigation = useNavigation();

  // list name for future function to create flascard function

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
        <Icon name="layers" size={33} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Hat;
