import { View, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import { Header, FocusedStatusBar, Search, Word, Images } from '../components';
import { COLORS } from '../constants';

const Main = () => {
  const { word, status } = useSelector((state) => state.data);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkblue }}>
      <FocusedStatusBar barStyle={'light-content'} />

      <View style={{ height: '100%' }}>
        <Header />

        <View
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 50,
            alignItems: 'center',
          }}
        >
          <Search />
          {status === 'success' && word.results && <Word />}
          <Images />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
