import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getAuth } from 'firebase/auth';
import { removeUser } from '../../redux/user/slice';

import { COLORS, FONTS } from '../../constants';

const LogOut = ({ closeConfirmation }) => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const confirmLogOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        alert(error);
      });
  };

  const stopLogOut = () => {
    closeConfirmation(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => stopLogOut()} style={styles.closeBtn}>
        <Icon name="close" size={30} color="#fff" />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>Are you sure you want to log out?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => confirmLogOut()}>
          <Text style={styles.btnYes}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => stopLogOut()}>
          <Text style={styles.btnNo}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogOut;

const styles = StyleSheet.create({
  container: {
    gap: 30,
    width: '90%',
    borderWidth: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderColor: COLORS.white,
    backgroundColor: COLORS.teal,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
  closeBtn: {
    top: 15,
    right: 10,
    position: 'absolute',
  },
  buttonContainer: {
    gap: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnYes: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    backgroundColor: COLORS.red,
  },
  btnNo: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    backgroundColor: COLORS.blue,
  },
});
