import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../res/colors';
import BusinessFormScreen from '../screens/BusinessFormScreen/BusinessFormScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryRed,
          shadowColor: Colors.primaryRed,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Perfil'}}
      />
      <Stack.Screen
        name="BusinessForm"
        component={BusinessFormScreen}
        options={{title: 'Agregar Negocio'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
