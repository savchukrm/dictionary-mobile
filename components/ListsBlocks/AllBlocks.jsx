import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Header from './Header';
import UserList from './UserList';
import Favourites from './Favourites';

const AllBlocks = () => {
  const { fav } = useSelector((state) => state.fav);

  const favoriteLength = fav.find((item) => item[0] === 'createdAt')
    ? 0
    : fav.length;

  return (
    <View style={{ alignItems: 'center', marginTop: 10, gap: 20 }}>
      <Header />
      <Favourites length={favoriteLength} />

      <UserList length={12} title="Family" />
      <UserList length={1} title="Nature" />
    </View>
  );
};

export default AllBlocks;
