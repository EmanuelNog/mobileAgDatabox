import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Routes from './src/routes';

//rgb(199, 199, 204)
const MyTheme = {
  dark: false,
  colors: {
    primary: '#fff',
    card: 'rgb(16, 229, 165)',
    text: '#fff',
    border: 'rgb(199, 199, 204)',
  },
};
function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Routes />
    </NavigationContainer>
  );
}
/*import React from 'react';
import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}*/
export default App;
