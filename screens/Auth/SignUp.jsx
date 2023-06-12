import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { setUser } from '../../redux/user/slice';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch(setUser({ email: user.email, id: user.uid }));
        setEmail('');
        setPassword('');
        navigation.navigate('Main');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    marginTop: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '60%',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#0782F9',
  },
  buttonOutline: {
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#0782F9',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
});

export default SignUp;
