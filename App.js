import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import HomeStack from './src/navigation/HomeStack';
import ProfileStack from './src/navigation/ProfileStack';
import RecomendationStack from './src/navigation/RecomendationStack';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from './src/res/colors';
import {Icon} from 'react-native-elements';
import MapStack from './src/navigation/MapStack';
import { PermissionsProvider } from './src/context/PermisionContext';


// Se crea el contexto para menejar todo dentro de la app
const AppState = ({children}) =>{
  return(
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppState>
          <Tab.Navigator
            screenOptions={{
              tintColor: Colors.gray,
              style: {
                backgroundColor: '#fff',
              },
            }}>
            <Tab.Screen
              name="Buscar"
              component={HomeStack}
              options={{
                tabBarIcon: ({size, color}) => (
                  <Icon name="search" type="font-awesome" color={color} />
                ),
                headerShown: false,
              }}
            />
          
            <Tab.Screen
              name="Recomendaciones"
              component={RecomendationStack}
              options={{
                tabBarIcon: ({size, color}) => (
                  <Icon name="star" type="font-awesome" color={color} />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Perfil"
              component={ProfileStack}
              options={{
                tabBarIcon: ({size, color}) => (
                  <Icon name="user-circle" type="font-awesome" color={color} />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Mapa"
              component={MapStack}
              options={{
                tabBarIcon: ({size, color}) => (
                  <Icon name="rocket" type="font-awesome" color={color} />
                ),
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </AppState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
