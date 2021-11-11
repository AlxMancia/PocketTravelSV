import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Colors from '../res/colors';
import {MapScreens} from '../screens/MapScreen';
import { DetailsScreen } from '../screens/DetailsScreen'


const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryRed,
          shadowColor: Colors.primaryRed,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen
        name="MapScreen"
        component={MapScreens}
        props={1}
        options={{title: 'Mapa'}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{title: 'Detalles'}}
      />
    </Stack.Navigator>
  );
};

export default MapStack;
