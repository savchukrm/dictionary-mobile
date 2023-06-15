import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { AllFolders } from '../components';

import { COLORS, FONTS } from '../constants';

const Folders = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkblue,
      }}
    >
      <View style={styles.top}>
        <Text style={styles.header}>My Folders</Text>
      </View>

      <AllFolders />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    padding: 20,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.white,
  },
  header: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
});

export default Folders;
