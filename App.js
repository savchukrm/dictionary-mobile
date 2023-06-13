import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useFonts } from 'expo-font';

import Main from './screens/Main';
import Sets from './screens/Sets';
import Lists from './screens/Lists';
import Login from './screens/Auth/Login';
import SignUp from './screens/Auth/SignUp';
import Folders from './screens/Folders';
import Profile from './screens/Profile';
import Navigation from './components/Navigation';

import './firebase/firebase';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Main"
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Sets" component={Sets} />
          <Stack.Screen name="Profile" component={Profile} />

          <Stack.Screen name="Lists" component={Lists} />
          <Stack.Screen name="Folders" component={Folders} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
