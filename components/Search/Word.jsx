import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Category from './Category';

import { COLORS } from '../../constants';

const Word = () => {
  const { word, status } = useSelector((state) => state.data);

  return (
    <View style={{ marginTop: 30, paddingHorizontal: 30, color: COLORS.white }}>
      {status === 'success' && word.results && (
        <View>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{ fontSize: 30, color: COLORS.white, fontWeight: '600' }}
            >
              {word.word}
            </Text>
            <Text style={{ color: COLORS.greylight }}>
              /{word.pronunciation.all}/
            </Text>
          </View>

          <Category />
        </View>
      )}
    </View>
  );
};

export default Word;
