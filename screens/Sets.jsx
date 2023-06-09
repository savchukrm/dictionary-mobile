import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';

import { FocusedStatusBar } from '../components';

import { COLORS, assets, FONTS } from '../constants';

const Sets = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 30,
        alignItems: 'center',
        backgroundColor: COLORS.darkblue,
      }}
    >
      <FocusedStatusBar barStyle={'light-content'} />

      <View style={[styles.block, { marginTop: 40 }]}>
        <View
          style={{ alignItems: 'center', backgroundColor: '#fff', padding: 20 }}
        >
          <Image
            resizeMode="cover"
            source={assets.dictionary}
            style={{ width: 250, height: 165 }}
          />
        </View>
        <Text style={styles.text}>Lists</Text>
      </View>

      <View style={[styles.block, { backgroundColor: '#701711' }]}>
        <View
          style={{ alignItems: 'center', backgroundColor: '#fff', padding: 10 }}
        >
          <Image
            resizeMode="cover"
            source={assets.test}
            style={{ width: 195, height: 195 }}
          />
        </View>
        <Text style={styles.text}>Folders</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '90%',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#267388',

    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowColor: '#fff',
    shadowOffset: { width: -3, height: 3 },
  },
  text: {
    fontSize: 15,
    color: '#fff',
    paddingTop: 10,
    marginBottom: 10,
    fontFamily: FONTS.medium,
  },
});

export default Sets;
