import React from 'react';
import { View, Text } from 'react-native';

import { COLORS } from '../../constants';

const Header = () => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 30,
        borderBottomWidth: 2,
        justifyContent: 'flex-start',
        borderBottomColor: COLORS.white,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 600, color: COLORS.white }}>
        Meaningo
      </Text>
    </View>
  );
};

export default Header;
