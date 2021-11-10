import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import Colors from '../res/colors';
import BusinessResultsScreen from '../screens/BusinessResultsScreen/BusinessResultsScreen';
import { MapScreens } from '../screens/MapScreen';


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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Buscar'}}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{headerShown: true, title: 'Categorías'}}
      />
      <Stack.Screen
        name="Results"
        component={BusinessResultsScreen}
        options={{title: 'Resultados'}}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreens}
        options={{title:"Direcciones"}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
