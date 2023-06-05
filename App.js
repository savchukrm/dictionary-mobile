import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from './redux/store';

import Main from './screens/Main';
import Folder from './screens/Folder';
import Profile from './screens/Profile';
import { Navigation } from './components';

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
  ``;
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          tabBar={() => null}
          initialRouteName="Main"
          screenOptions={{
            swipeEnabled: true,
          }}
        >
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Folder" component={Folder} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
