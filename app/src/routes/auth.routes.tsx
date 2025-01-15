import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginView } from '../views/Auth/Login/LoginView';
import { RecuperarSenhaView } from '../views/Auth/RecuperarSenha/RecuperarSenhaView';
import RegisterView from '../views/Auth/Cadastro/RegisterView';
import { screenOptionsFactory } from 'expo-router/build/useScreens';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator id={undefined}
      initialRouteName="Login"
    >
        <Screen name="Login" component={LoginView} />
        <Screen name="RecuperarSenha" component={RecuperarSenhaView} />
        <Screen name='Register' component={RegisterView} options={{ headerShown: true }} />
    </Navigator>
  )
}
