import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pagina1Screen} from '../Screens/Pagina1Screen';
import {Pagina2Screen} from '../Screens/Pagina2Screen';
import {HomeScreen} from '../Screens/HomeScreen';
import {styles} from '../theme/PaginaScreen.style';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          statusBarColor: 'blue',
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        name="Pagina1"
        component={Pagina1Screen}
        options={{statusBarColor: 'white', statusBarStyle: 'dark'}}
      />
      <Stack.Screen name="Pagina2" component={Pagina2Screen} />
    </Stack.Navigator>
  );
};
