import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MegaSenaScreen from './src/screens/MegaSenaScreen';
import JogoDoBichoScreen from './src/screens/JogoDoBichoScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Mega Sena"
          component={MegaSenaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dice-multiple" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Jogo do Bicho"
          component={JogoDoBichoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="paw" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
