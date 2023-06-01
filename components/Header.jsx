import { View, Text } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingTop: 10 }}
    >
      <Text style={{ fontSize: 20, fontWeight: 600 }}>Meaningo</Text>
    </View>
  );
};

export default Header;
