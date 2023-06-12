import React from 'react';
import { SafeAreaView } from 'react-native';

import { useAuth } from '../hooks/use-auth';

import { IsAuth, Unauthorized } from '../components';

import { COLORS } from '../constants';

const Profile = () => {
  const { isAuth } = useAuth();

  return (
    <SafeAreaView
      style={{
        height: '100%',
        justifyContent: 'center',
        backgroundColor: COLORS.darkblue,
      }}
    >
      {isAuth ? <IsAuth /> : <Unauthorized />}
    </SafeAreaView>
  );
};

export default Profile;
