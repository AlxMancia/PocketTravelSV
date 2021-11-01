import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Colors from '../res/colors';
import { MapScreens } from '../screens/MapScreen';

const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='MapScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryRed,
          shadowColor: Colors.primaryRed,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="MapScreen" component={MapScreens} />
     
    </Stack.Navigator>
  );
};

export default MapStack;
