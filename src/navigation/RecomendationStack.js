import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecomendationScreen from '../screens/RecomendationScreen';
import Colors from '../res/colors';
import { DetailsScreen } from '../screens/DetailsScreen';
import { MapScreens } from '../screens/MapScreen';

const Stack = createStackNavigator();

const RecomendationStack = () => {
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
        name="Recomendation"
        component={RecomendationScreen}
        options={{title: 'Recomendaciones'}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{title: 'Detalles'}}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreens}
        options={{title:"Direcciones"}}
      />
    </Stack.Navigator>
  );
};

export default RecomendationStack;
