import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// Importando as telas
import HomeScreens from '../sreens/HomeScreens'
import UsuarioScreen from '../sreens/UsuarioScreen'


const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreens}
        options={{ 
            title: 'Lista de Usuários', 
            headerTitleAlign: 'center' 
        }} 
      />

      <Stack.Screen 
        name="UsuarioScreen" 
        component={UsuarioScreen} 
        options={{
            title: 'Detalhes do Usuário', 
            headerTitleAlign: 'center'
        }}
      />

    </Stack.Navigator>
  )
}

