import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text, ActivityIndicator, MD2Colors } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {

  // Obtém a categoria passada como parâmetro da rota
  const { categoria } = route.params;
  // e cria um estado para armazenar os produtos
  const [produtos, setProdutos] = useState([]);

  // Faz uma requisição para a API quando o componente é montado ou a categoria muda
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}?delay=5000`)
      .then(resposta => {
        console.log(resposta.data.products)
        setProdutos(resposta.data.products)
      })
      .catch(erro => {
        alert('Erro ao carregar os dados')
      })
  }, [categoria]);

  return (

    // Renderiza uma lista de produtos usando FlatList
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
          // Cada item é um Card que exibe as informações do produto
          <Card style={styles.card} onPress={() => navigation.navigate('ProdutoScreen', { id: item.id })}>
            <Card.Title title={item.title} />
            <Card.Cover source={{ uri: item.thumbnail}} />
            <Card.Content>

              <Text style={styles.infoTexto}>
                <Text style={styles.rotulo}>Categoria: {item.category}</Text>
              </Text>
              <Text style={styles.infoTexto}>
                <Text style={styles.rotulo}>Marca: {item.brand}</Text>
              </Text>
              <Text style={styles.infoTexto}>
                <Text style={styles.rotulo}>Estoque: {item.stock}</Text>
              </Text>
              <Text style={styles.infoTexto}>
                <Text style={styles.rotulo}>Avaliação:  ⭐  {item.rating}</Text>
              </Text>
              <Text style={styles.infoTexto}>
                <Text style={styles.rotulo}>Preço:   R$  {item.price}</Text>
              </Text>
              <Text style={styles.infoTexto}>
                <Text style={styles.rotulo}>Tags: {item.tags}</Text>
              </Text>
              <Text style={[styles.infoTexto, {color: item.stock > 0 ? 'green' : 'red'}]}>
                <Text style={styles.rotulo}>Disponível: {item.stock ? 'Sim' : 'Não'}</Text>
              </Text>

            </Card.Content>

          </Card>

      )}
      ListEmptyComponent={() => (
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />
          <Text variant='titleLarge' style={{ fontSize: 20, color: '#000' }}>Aguarde...</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
  infoTexto: {
    fontSize: 16,
    marginVertical: 4,
  },
  rotulo: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  loadingContainer:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',  
    height: 750
  }
});