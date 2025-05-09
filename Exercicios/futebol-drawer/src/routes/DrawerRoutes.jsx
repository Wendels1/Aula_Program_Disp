import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import EscudoScreen from '../screens/EscudoScreen'
import JogadoresScreen from '../screens/JogadoresScreen';
import TituloScreen from '../screens/TituloScreen'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes  () {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#cc0000',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -15 },
        headerStyle: { backgroundColor: '#cc0000' },
        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name="Escudo"
        component={EscudoScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="shield" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Jogadores"
        component={JogadoresScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="people" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Títulos"
        component={TituloScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="trophy" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};