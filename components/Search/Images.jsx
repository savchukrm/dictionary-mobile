import { useSelector } from 'react-redux';
import { Image, View, Text } from 'react-native';

import { COLORS, FONTS, assets } from '../../constants';

const Images = () => {
  const { word, status } = useSelector((state) => state.data);

  return (
    <View style={{ marginTop: 60 }}>
      {status === '' && (
        <Image
          resizeMode="cover"
          source={assets.search}
          style={{ width: 400, height: 400 }}
        />
      )}

      {status === 'loading' && (
        <Image
          resizeMode="cover"
          source={assets.loading}
          style={{ width: 400, height: 400 }}
        />
      )}

      {((status === 'error' && !word.word) ||
        (status === 'success' && !word.results)) && (
        <View>
          <View style={{ marginHorizontal: 30, gap: 10 }}>
            <Text
              style={{
                fontSize: 17,
                color: COLORS.white,
                fontFamily: FONTS.bold,
              }}
            >
              You have no matching search terms.
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontFamily: FONTS.light,
                marginBottom: 20,
              }}
            >
              Please make sure that you've entered the word correctly.
            </Text>
          </View>

          <Image
            resizeMode="cover"
            source={assets.sorry}
            style={{ width: 350, height: 350 }}
          />
        </View>
      )}
    </View>
  );
};

export default Images;
