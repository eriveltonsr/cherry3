import React from 'react';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import CadastroScreen from '../screens/cadastroScreen/CadastroScreen';
import PasswordScreen from '../screens/passwordScreen/PasswordScreen';
const Stack = createStackNavigator();
// import screenOptions from '../navigators/defaultScreenOptions';
function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={{
          headerStyle: {
            backgroundColor: '#D71F34',
            elevation: 0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Senha"
        component={PasswordScreen}
        options={{
          headerStyle: {
            backgroundColor: '#D71F34',
            elevation: 0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
export default LoginNavigator;
