import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>PrimeiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'red',
        borderWidth: 10,
    },
    texto: {
        fontSize: 26,
        fontWeight: 'bold',
    }
})