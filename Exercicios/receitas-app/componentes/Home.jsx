import React from 'react'
import { Card, Paragraph, Text } from 'react-native-paper'


export default function Home(props) {

    const { nome, tempoPreparo, porcoes, imagem, ingredientes} = props

  return (
    <Card style={{ margin: 10,  borderRadius: 10 }}>
        <Paragraph style={{ margin: 10, fontSize: 20, fontWeight: 'bold' }}>Receitas: </Paragraph>
        <Card.Cover source={{uri: imagem}} />
        <Card.Content>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>{nome}</Text>
            <Text>Ingredientes: {ingredientes}</Text>
        </Card.Content>
    </Card>
  )
}

