import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
    // Lógica do meu coponente
    const nome = 'Wendel'
    const idade = 21

    function SomarMaioridade(idade) {
        return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
        
    } 

    function alerta() {
        alert('Alerta de teste')
    }

    // Retorno do meu componente
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>JavascriptComponente</Text>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Idade: {idade}</Text>
        <Text style={styles.texto}>Idade: {idade + 40}</Text>
        <Text style={styles.texto}>Idade: {idade} é {SomarMaioridade(idade)}</Text>
        <Button title="Enviar" onPress={alerta} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'yellow',
        borderWidth: 5,
    },
    texto: {
        fontSize: 10,
        fontWeight: 'bold',
    }
})