import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

    console.log("Propriedades -> " , props)
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: {props.nome}</Text>
      <Text style={styles.texto}>Idade: {props.idade}</Text>
      import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Perfil(props) {

  console.log("Propiedades -> ", props)

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
      <Text style={styles.texto}>NOME: {props.nome}</Text>
      <Text style={styles.texto}>IDADE: {props.idade}</Text>
      <Text style={styles.texto}>TELEFONE: {props.telefone}</Text>
      <Text style={styles.texto}>EMAIL: {props.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    borderWidth: 5,
    padding: 10
  },
  texto: {
    fontSize: 15,
    fontWeight: 600
  }
})      <Text style={styles.texto}>Email: {props.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'yellow',
        borderWidth: 10,
    },
    texto: {
        fontSize: 26,
        fontWeight: 'bold',
    }
})