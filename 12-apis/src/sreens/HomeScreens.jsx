import { FlatList, StyleSheet, View } from 'react-native'
import { Card, Text, Avatar, IconButton, ActivityIndicator } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function HomeScreens() {

  // Cria um estado para armazenar os dados da API
  const [usuarios, SetUsuarios] = useState([])


  // Faz algo quando o componente é montado
  useEffect(() => {
    axios.get('https://dummyjson.com/users?delay=5000')
      .then(Resposta => {
        console.log(Resposta.data.users)
        SetUsuarios(Resposta.data.users)
      })
      .catch(erro => {
        alert('Erro ao carregar os dados')
      })

  }, [])

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={usuarios}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Title 
              title={item.firstName + ' ' + item.lastName}
              subtitle={item.email}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.image}} />}
              right={(props) => <IconButton icon='chevron-right'  size={30}/>}
            />
             
          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator  size={50} color={'#000'} />

            <Text  variant='titleLarge' style={{ fontSize: 20, color: '#000' }}>Aguarde...</Text>
          </View>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  loadingContainer:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',  
    height: 750
  }
})