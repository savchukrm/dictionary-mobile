import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { getAuth } from 'firebase/auth';

import { COLORS, FONTS } from '../../constants';

const Form = ({
  title,
  header,
  handleAct,
  redirectAct,
  redirectName,
  errorMessage,
  redirectMessage,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.header}>{header}</Text>

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          value={password}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handleAct(email, password, setEmail, setPassword, auth)
          }
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>

        <View style={styles.redirect}>
          <Text style={styles.question}>{redirectMessage}</Text>

          <TouchableOpacity>
            <View style={styles.redirectBtn}>
              <Text
                onPress={redirectAct}
                style={{ color: COLORS.white, fontFamily: FONTS.medium }}
              >
                {redirectName}
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
  header: {
    fontSize: 22,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.medium,
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
  errorMessage: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
    fontFamily: FONTS.regular,
  },
});

export default Form;
