
import { Card, Text, Button } from 'react-native-paper'
import { View, FlatList } from 'react-native'
import React, { useState, useEffect }from 'react'


export default function AlunoLista({navigation}) {

    const [alunos, setAlunos] = useState([
        {
            id: 1,
            nome: 'João',
            cpf: '12345678901',
            email: 'Joazin@gmai.com',
            telefone: '(61) 99999-9999',
            dataNascimento: '01/01/2000',
        },
        {
            id: 2,
            nome: 'Maria',
            cpf: '98765432100',
            email: 'Maria@gmail.com',
            telefone: '(61) 88888-8888',
            dataNascimento: '02/02/2001',
        },
        {
            id: 3,
            nome: 'José',
            cpf: '12345678902',
            email: 'José@gmail.com',
            telefone: '(61) 77777-7777',
            dataNascimento: '03/03/2002',
        }
    ])

  return (
    <View>
      <Button
        mode='contained'
        icon='plus'
        style={{ margin: 10 }}
        onPress={() => navigation.navigate('AlunoForm')}
      >
        Cadastrar
      </Button>

      <FlatList
        data={alunos}
        renderItem={({ item }) => (
            <Card 
                style={{ margin: 10 }} 
                onPress={() => navigation.navigate('AlunoForm', item.id )}
            >

                <Card.Content>

                    <Text>ID: {item.id}</Text>
                    <Text>Nome:{item.nome}</Text>
                    <Text>CPF: {item.cpf}</Text>

                </Card.Content>

                <Card.Actions>

                    <Button icon='pencil'> </Button>
                    <Button icon='delete'> </Button>

                </Card.Actions>
            </Card>
        )}
      />
    </View>
  )
}

