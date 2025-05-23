import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton, Text, MD2Colors   } from 'react-native-paper'
import axios from 'axios'

export default function HomeScreen({navigation, route}) {


  // Cria um estado para armazenar os dados da API
  const [produtos, setProdutos] = useState([])


  // Faz algo quando o componente é montado
  useEffect(() => {   
    axios.get('https://dummyjson.com/products/category-list?delay=5000')
      .then(resposta => {
        console.log(resposta.data)
        setProdutos(resposta.data)
      })
      .catch(erro => {
        alert('Erro ao carregar os dados')
      })
  }, [])


  return (
    <View style={styles.container}>

      <FlatList 
        data={produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card 
            style={{ margin: 10 }}
            onPress={() => navigation.navigate('ListaProdutosScreen', { categoria: item })}
          >
            <Card.Title 
              title={item} // item é a categoria
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              right={(props) => <IconButton icon='chevron-right' size={30} />}
            />

          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />

            <Text variant='titleLarge' style={{ fontSize: 20, color: '#000' }}>Aguarde...</Text>
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