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
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="BusinessForm" component={BusinessFormScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
