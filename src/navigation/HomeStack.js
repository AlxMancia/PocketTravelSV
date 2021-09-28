import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import Colors from '../res/colors';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryRed,
          shadowColor: Colors.primaryRed,
        },
        headerTintColor: Colors.white,
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
