import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { COLORS } from '../constants';

const Navigation = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        paddingTop: 15,
        flexDirection: 'row',
        paddingHorizontal: 30,
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Icon name="search" size={30} color={COLORS.teal} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Folder')}>
        <Icon name="folder" size={30} color={COLORS.teal} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="person" size={30} color={COLORS.teal} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
