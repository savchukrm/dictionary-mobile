import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { COLORS, FONTS } from '../constants';

const Navigation = () => {
  const navigation = useNavigation();
  const [isMainPressed, setIsMainPressed] = useState(false);
  const [isFolderPressed, setIsFolderPressed] = useState(false);
  const [isProfilePressed, setIsProfilePressed] = useState(false);

  const handleMainPressIn = () => {
    setIsMainPressed(true);
  };

  const handleMainPressOut = () => {
    setIsMainPressed(false);
  };

  const handleFolderPressIn = () => {
    setIsFolderPressed(true);
  };

  const handleFolderPressOut = () => {
    setIsFolderPressed(false);
  };

  const handleProfilePressIn = () => {
    setIsProfilePressed(true);
  };

  const handleProfilePressOut = () => {
    setIsProfilePressed(false);
  };

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
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
      }}
    >
      <TouchableWithoutFeedback
        onPressIn={handleMainPressIn}
        onPressOut={handleMainPressOut}
        onPress={() => navigation.navigate('Main')}
      >
        <View style={[{ flex: 1, alignItems: 'center' }]}>
          <Icon
            name="search"
            size={isMainPressed ? 31 : 30}
            color={isMainPressed ? COLORS.greysecond : COLORS.teal}
          />
          <Text style={styles.text}>Search</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPressIn={handleFolderPressIn}
        onPressOut={handleFolderPressOut}
        onPress={() => navigation.navigate('Folder')}
      >
        <View style={[{ flex: 1, alignItems: 'center' }]}>
          <Icon
            name="folder"
            size={isFolderPressed ? 31 : 30}
            color={isFolderPressed ? COLORS.greysecond : COLORS.teal}
          />
          <Text style={styles.text}>Sets</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPressIn={handleProfilePressIn}
        onPressOut={handleProfilePressOut}
        onPress={() => navigation.navigate('Profile')}
      >
        <View style={[{ flex: 1, alignItems: 'center' }]}>
          <Icon
            name="person"
            style={styles.icon}
            size={isProfilePressed ? 31 : 30}
            color={isProfilePressed ? COLORS.greysecond : COLORS.teal}
          />
          <Text style={styles.text}>Profile</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  text: {
    color: COLORS.teal,
    fontFamily: FONTS.regular,
    fontSize: 10,
  },
});
