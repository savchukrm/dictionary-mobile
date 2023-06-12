import React from 'react';
import { SafeAreaView } from 'react-native';

import { useAuth } from '../hooks/use-auth';

import { IsAuth, Unauthorized } from '../components';

const Profile = () => {
  const { isAuth } = useAuth();

  return <SafeAreaView>{isAuth ? <IsAuth /> : <Unauthorized />}</SafeAreaView>;
};

export default Profile;
