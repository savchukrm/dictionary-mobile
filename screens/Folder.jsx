import { SafeAreaView, Text, View, Image } from 'react-native';

import { FocusedStatusBar } from '../components';

import { COLORS, assets } from '../constants';

const Folder = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 20,
        alignItems: 'center',
        backgroundColor: COLORS.darkblue,
      }}
    >
      <FocusedStatusBar barStyle={'light-content'} />

      <View style={{ backgroundColor: '#fff', width: '90%' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            resizeMode="cover"
            source={assets.dictionary}
            style={{ width: 300, height: 220 }}
          />
        </View>
        <Text>Lists with words</Text>
      </View>

      <View style={{ backgroundColor: '#fff', width: '90%' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            resizeMode="cover"
            source={assets.test}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <Text>Folders</Text>
      </View>
    </SafeAreaView>
  );
};

export default Folder;
