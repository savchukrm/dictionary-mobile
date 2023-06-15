import React from 'react';
import { View } from 'react-native';

import UserFolder from './UserFolder';

import Header from '../ListsBlocks/Header';

const AllFolders = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 10, gap: 20 }}>
      <Header />

      <UserFolder title="man" description="here displays description" />
      <UserFolder title="man" description="here displays description" />
    </View>
  );
};

export default AllFolders;
