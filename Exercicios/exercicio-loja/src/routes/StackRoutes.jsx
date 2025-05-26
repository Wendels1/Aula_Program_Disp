import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// Importando as telas
import HomeScreens from '../screens/HomeScreen'
import ListaProdutosScreen from '../screens/ListaProdutosScreen'
import  ProdutoScreen from '../screens/ProdutoScreen'

const Stack = createStackNavigator()


export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreens}
        options={{ 
            title: 'Lista de Produtos', 
            headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
        }} 
      />

      <Stack.Screen 
        name="ListaProdutosScreen" 
        component={ListaProdutosScreen} 
        options={{
            title: 'Detalhes do Produto', 
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
        }}
      />

      <Stack.Screen 
        name="ProdutoScreen" 
        component={ProdutoScreen} 
        options={{
            title: 'Detalhes do Produto', 
            headerTitleAlign: 'center'
            , headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
        }}
      />


    </Stack.Navigator>
  )
}
