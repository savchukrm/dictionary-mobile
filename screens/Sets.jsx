import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, assets, FONTS } from '../constants';

const Sets = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.darkblue,
      }}
    >
      <TouchableOpacity
        style={styles.block}
        onPress={() => navigation.navigate('Lists')}
      >
        <View
          style={{
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#fff',
          }}
        >
          <Image
            resizeMode="cover"
            source={assets.dictionary}
            style={{ width: 250, height: 165 }}
          />
        </View>
        <Text style={styles.text}>Lists</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.block, { backgroundColor: '#701711' }]}
        onPress={() => navigation.navigate('Folders')}
      >
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
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '90%',
    marginTop: 60,
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
