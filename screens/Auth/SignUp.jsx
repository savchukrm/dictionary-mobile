import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Form } from '../../components';

import { setUser } from '../../redux/user/slice';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (email, password, setEmail, setPassword, auth) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch(setUser({ email: user.email, id: user.uid }));
        setEmail('');
        setPassword('');
        navigation.navigate('Main');
      })
      .catch((error) => {
        let errorCode = error.code;

        switch (errorCode) {
          case 'auth/email-already-in-use':
            setErrorMessage('Email already in use');
            break;
          case 'auth/invalid-email':
            setErrorMessage('Invalid email');
            break;
          case 'auth/weak-password':
            setErrorMessage('The password is too weak.');
            break;
          case 'auth/too-many-requests':
            setErrorMessage('Too many requests. Please try again in 1 minute');
            break;
          case 'auth/network-request-failed':
            setErrorMessage('Network request failed');
            break;
          case 'auth/missing-password':
            setErrorMessage('Missing password');
            break;
          default:
            break;
        }
      });
  };

  return (
    <Form
      title="Register"
      redirectName="Log in"
      header="Create a new account"
      handleAct={handleSignUp}
      errorMessage={errorMessage}
      redirectMessage="Already have an account?"
      redirectAct={() => navigation.navigate('Login')}
    />
  );
};

export default SignUp;
