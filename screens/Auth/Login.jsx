import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { Form } from '../../components';

import { setUser } from '../../redux/user/slice';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (email, password, setEmail, setPassword, auth) => {
    signInWithEmailAndPassword(auth, email, password)
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
          case 'auth/user-not-found':
            setErrorMessage('User not found');
            break;
          case 'auth/wrong-password':
            setErrorMessage('Wrong password');
            break;
          case 'auth/too-many-requests':
            setErrorMessage('Too many requests. Please try again in 1 minute');
            break;
          case 'auth/missing-password':
            setErrorMessage('Missing password');
            break;
          case 'auth/invalid-email':
            setErrorMessage('Invalid email');
            break;
          default:
            break;
        }
      });
  };

  return (
    <Form
      title="Login"
      handleAct={handleLogin}
      redirectName="Register"
      errorMessage={errorMessage}
      header="Login to the account"
      redirectMessage="Don't have an account?"
      redirectAct={() => navigation.navigate('SignUp')}
    />
  );
};

export default Login;
