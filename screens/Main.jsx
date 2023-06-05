import { View, SafeAreaView } from 'react-native';

import { Header, FocusedStatusBar, Content } from '../components';
import { COLORS } from '../constants';

const Main = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkblue, flex: 1 }}>
      <FocusedStatusBar barStyle={'light-content'} />

      <Header />

      <Content />
    </SafeAreaView>
  );
};

export default Main;
