import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import UserList from './UserList';
import Favourites from './Favourites';

const AllBlocks = () => {
  const { fav } = useSelector((state) => state.fav);
  const { lists } = useSelector((state) => state.lists);

  const favoriteLength = fav.find((item) => item[0] === 'createdAt')
    ? 0
    : fav.length;

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 10,
        paddingBottom: 20,
        alignItems: 'center',
      }}
    >
      <Favourites length={favoriteLength} />

      {lists.map((item, i) => {
        const [title, content] = item;
        const contentLength = Object.entries(content);

        const lengthValue = contentLength.find((el) => el[0] === 'createdAt')
          ? 0
          : contentLength.length;

        return <UserList title={title} length={lengthValue} key={i} />;
      })}
    </ScrollView>
  );
};

export default AllBlocks;
