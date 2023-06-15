import { View } from 'react-native';
import React from 'react';

import Header from './Header';
import UserList from './UserList';
import Favourites from './Favourites';

const AllBlocks = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 10, gap: 20 }}>
      <Header />
      <Favourites length={0} />
      <UserList length={12} title="Family" />
      <UserList length={1} title="Nature" />
    </View>
  );
};

export default AllBlocks;
