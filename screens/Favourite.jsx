import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { COLORS } from '../constants';

const Favourite = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.darkblue,
      }}
    >
      <Text>Favourite</Text>
      <Text>You do not have any saved items in the current list</Text>
    </SafeAreaView>
  );
};

export default Favourite;
