import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Feed from '../screens/Feed'
import Home from '../screens/Home'
import Post from '../screens/Post'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Feed' component={Feed} />
      <Stack.Screen name='Posts' component={Post} />

    </Stack.Navigator>
  )
}
