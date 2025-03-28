import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Serie(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Serie</Text>
      <Text style={styles.texto}>Título: {props.nome}</Text>
      <Text style={styles.texto}>Ano: {props.ano}</Text>
      <Text style={styles.texto}>Diretor: {props.diretor}</Text>
      <Text style={styles.texto}>Temporadas: {props.temporadas}</Text>
      <Text style={styles.texto}>Capa: </Text>
      <Image source={{ uri: props.capa }} style={{ height: 200, width: 200 }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})