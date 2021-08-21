import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/login';
import Menu from './pages/menu';
import Area from './pages/area';
/*

        <AppStack.Screen name="Login" component={Login} />
*/
export default function Routes() {
  return (
    //<NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Menu" component={Menu} />
        <AppStack.Screen name="Area" component={Area} />
      </AppStack.Navigator>

    //</NavigationContainer>
  );
}