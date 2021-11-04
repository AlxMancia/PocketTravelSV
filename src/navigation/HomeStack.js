import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import Colors from '../res/colors';
import BusinessResultsScreen from '../screens/BusinessResultsScreen/BusinessResultsScreen';

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
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        screenOptions={{headerShown: true}}
      />
      <Stack.Screen
        name="Results"
        component={BusinessResultsScreen}
        screenOptions={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
