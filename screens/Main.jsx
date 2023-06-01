import { View, ScrollView, SafeAreaView } from 'react-native';

import { FocusedStatusBar, Header, Images, Navigation } from '../components';
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
        <Images />
        <Navigation />
      </View>
    </SafeAreaView>
  );
};

export default Main;
