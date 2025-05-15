import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function NumeroAleatorio() {

    const [NumeroAleatorio, setNumeroAleatorio] = useState(0)
    const [listaNumeros, setListaNumeros] = useState([])

    function gerar(){
        const numeroGerado = Math.floor(Math.random() * 101) 
        setNumeroAleatorio(numeroGerado)
        setListaNumeros([...listaNumeros, numeroGerado])

    }

  return (
    <View>
        <Card style={{ margin: 5}}>
            <Card.Content>
                <Text>Gerador de Número Aléatorio</Text>
                <Text variant='displayMedium'>Número: 0 {NumeroAleatorio}</Text>
            </Card.Content>
            <Card.Actions>
                <Button icon='plus' onPress={gerar}>Gerar</Button>
            </Card.Actions>
        </Card>
      
        <Card>
            <Card.Content>
                {listaNumeros.map(numero => (<Text>{numero}</Text>))}
            </Card.Content>
        </Card>
    </View>
  )
}