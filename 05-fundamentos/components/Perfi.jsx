import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfi(props) {
    console.log(props)
    
  return (
    <View>
        <Text>Perfi</Text>
        <Text>{props.nome}</Text>
        <Text>{props.sobrenome}</Text>
        <Text>{props.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})