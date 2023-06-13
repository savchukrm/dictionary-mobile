import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import LogOut from '../Auth/LogOut';

const IsAuth = () => {
  const [confirmLogOut, setConfirmLogOut] = useState(false);

  return (
    <View style={styles.container}>
      {confirmLogOut ? (
        <LogOut closeConfirmation={setConfirmLogOut} />
      ) : (
        <TouchableOpacity
          onPress={() => setConfirmLogOut(true)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      )}
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
