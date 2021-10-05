import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecomendationScreen from '../screens/RecomendationScreen';
import Colors from '../res/colors';

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
      <Stack.Screen name="Recomendation" component={RecomendationScreen} />
    </Stack.Navigator>
  );
};

export default RecomendationStack;
