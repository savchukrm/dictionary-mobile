import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from './redux/store';

import Main from './screens/Main';
import Sets from './screens/Sets';
import Lists from './screens/Lists';
import Login from './screens/Auth/Login';
import SignUp from './screens/Auth/SignUp';
import Folders from './screens/Folders';
import Profile from './screens/Profile';
import { Navigation } from './components';

import './firebase';

const Tab = createMaterialTopTabNavigator();

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
        <Tab.Navigator
          tabBar={() => null}
          initialRouteName="Main"
          screenOptions={({ route }) => ({
            swipeEnabled: !['Login', 'Folders', 'Lists'].includes(route.name),
          })}
        >
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Sets" component={Sets} />
          <Tab.Screen name="Profile" component={Profile} />

          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="Folders" component={Folders} />
          <Tab.Screen name="Lists" component={Lists} />
        </Tab.Navigator>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
