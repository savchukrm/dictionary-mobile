import { View, ScrollView, SafeAreaView } from 'react-native';

import { Header, FocusedStatusBar, Search, Word } from '../components';
import { COLORS } from '../constants';

const Main = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkblue }}>
      <FocusedStatusBar barStyle={'light-content'} />

      <View
        style={{
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Header />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Search />
          <Word />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
