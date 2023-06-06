import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Category from './Category';

import { COLORS, FONTS } from '../../constants';

const Word = () => {
  const { word, status } = useSelector((state) => state.data);

  return (
    <>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 30,
          color: COLORS.white,
          width: '100%',
        }}
      >
        {status === 'success' && word.results && (
          <View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 30,
                  color: COLORS.white,
                  fontFamily: FONTS.medium,
                }}
              >
                {word.word}
              </Text>
              <Text
                style={{ color: COLORS.greylight, fontFamily: FONTS.light }}
              >
                {word.pronunciation && `/${word.pronunciation.all}/`}
              </Text>
            </View>

            <Category />
          </View>
        )}
      </View>
    </>
  );
};

export default Word;
