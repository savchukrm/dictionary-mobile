import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getAuth } from 'firebase/auth';

import { removeUser } from '../../redux/user/slice';

const IsAuth = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#0782F9',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
});

export default IsAuth;
