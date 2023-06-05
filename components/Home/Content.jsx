import { View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { useSelector } from 'react-redux';

import Search from '../Search/Search';
import Images from '../Search/Images';
import Word from '../Search/Word';

const Content = () => {
  const { word, status } = useSelector((state) => state.data);

  return (
    <>
      {status === 'success' && word.results ? (
        <ScrollView
          style={{ flex: 1, marginTop: 50 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ alignItems: 'center' }}>
            <Search />
            <Word />
            <Images />
          </View>
        </ScrollView>
      ) : (
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <Search />
          <Images />
        </View>
      )}
    </>
  );
};

export default Content;
