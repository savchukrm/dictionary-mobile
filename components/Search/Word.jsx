import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useAuth } from '../../hooks/use-auth';

import Category from './Category';
import Popup from '../Bookmark/Popup';

import { COLORS, FONTS } from '../../constants';

const Word = () => {
  const { isAuth } = useAuth();
  const navigation = useNavigation();

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

            {isAuth ? (
              <Popup />
            ) : (
              <TouchableOpacity
                style={{ position: 'absolute', right: 0, top: 15 }}
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                <Icon name="bookmark" size={40} color={COLORS.greysecond} />
              </TouchableOpacity>
            )}

            <Category />
          </View>
        )}
      </View>
    </>
  );
};

export default Word;
