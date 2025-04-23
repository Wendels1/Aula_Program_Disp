import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Post(navigation, route) {
  return (
    <View>
      <Text>Post</Text>

      <Button
        mode='contained'
        onPress={() => navigation.navigate('Feed', { name: 'Lucas' })} 
      >
        Ir para Feed
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})