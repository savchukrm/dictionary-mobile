import { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
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
