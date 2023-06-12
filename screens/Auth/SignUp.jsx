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
import { COLORS, FONTS } from '../../constants';

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

        <View style={styles.redirect}>
          <Text style={styles.question}>Already have an account?</Text>

          <TouchableOpacity>
            <View style={styles.redirectBtn}>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{ color: COLORS.white, fontFamily: FONTS.medium }}
              >
                Log in
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.darkblue,
  },
  inputContainer: {
    gap: 10,
    width: '80%',
  },
  input: {
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    color: COLORS.greysecond,
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.white,
  },
  buttonContainer: {
    gap: 28,
    width: '80%',
  },
  button: {
    padding: 16,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    fontFamily: FONTS.medium,
  },
  redirect: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  question: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.greylight,
    fontFamily: FONTS.regular,
  },
  redirectBtn: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
});

export default SignUp;
