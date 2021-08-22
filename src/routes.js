import React, { useState, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/menu';
import Login from './pages/login';
import AuthContext from './context/auth'

//EDITAR trocaRoutes pra Routes
export default function Routes() {
  const RootStack = createStackNavigator();

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        const { token } = data;
        dispatch({ type: 'SIGN_IN', token: token });
      },
      signOut: async () => {
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async data => {
        const { token } = data
        dispatch({ type: 'SIGN_IN', token: token });
      },
    }),
    [],
  );

  
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    { isLoading: true, isSignout: false, userToken: null },
  );
  useEffect(() => {
    
  }, []);

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <RootStack.Navigator>
          {state.userToken == null ? (
            <>
            <RootStack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />       
          </>
          ) : (
            <>
            <RootStack.Screen
            name="Home"
            component={Menu}
            options={{
              headerShown: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#fc6500',
              },
            }}
          />
          </>
            
          )}

        </RootStack.Navigator>
      </AuthContext.Provider>
    </>
  );
}