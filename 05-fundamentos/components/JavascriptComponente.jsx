import { View, Text } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
    const nome = 'Wendel'
    const idade = 21

    function ExibirNome() {
        return nome
    }

    function ChecarMaiorIdade() {
        if (idade >= 18) {
            return 'Maior de idade'
        } else {
            return 'Menor de idade'
        }
    }

  return (
    <View>
        <Text>Componente em JavaScript</Text>
        <Text>{nome}</Text>
        <Text>{idade}</Text>
        <Text>{ExibirNome()}</Text>
        <Text>Resultado: {21 + 31}</Text>
        <Text>{idade + 20 }</Text>
        <Text>Check 18+ :{ChecarMaiorIdade()}</Text>
        <Text>Check 18+ :{idade >= 18 ? 'Maior de idade' : 'Menor de idade'}</Text>
    </View>
  )
}