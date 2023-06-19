import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { Hat } from '../components';

import { COLORS } from '../constants';

const ListScreen = ({ route }) => {
  const { listname } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.darkblue,
      }}
    >
      <Text>List Screen - {listname}</Text>

      <Hat />

      <Text>You do not have any saved items in the current list</Text>
    </SafeAreaView>
  );
};

export default ListScreen;
