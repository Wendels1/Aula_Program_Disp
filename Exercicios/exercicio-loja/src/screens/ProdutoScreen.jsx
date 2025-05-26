import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, ActivityIndicator, MD2Colors } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {

  // Obtém o ID do produto passado como parâmetro da rota
  const { id } = route.params;
  const [produto, setProduto] = useState(null);

  // Faz uma requisição para a API quando o componente é montado ou o ID muda
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}?delay=5000`)
      .then(resposta => {
        console.log(resposta.data);
        setProduto(resposta.data)
      })
      .catch(erro => {
        alert('Erro ao carregar os dados')
      })
  }, [id]);

  return (
    
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      
      {produto ? (

        <Card style={styles.card}>

          <Card.Title title={produto.title} />
          <Card.Cover source={{ uri: produto.thumbnail }} />
          <Card.Content>

            <Text style={styles.infoTexto}>
              <Text style={styles.rotulo}>Descrição: </Text>{produto.description}
            </Text>

            <Text style={styles.infoTexto}>
              <Text style={styles.rotulo}>Categoria: </Text>{produto.category}
            </Text>

            <Text style={styles.infoTexto}>
              <Text style={styles.rotulo}>Marca: </Text>{produto.brand}
            </Text>

            <Text style={styles.infoTexto}>
              <Text style={styles.rotulo}>Estoque: </Text>{produto.stock}
            </Text>

            <Text style={styles.infoTexto}>
              <Text style={styles.rotulo}>Avaliação: </Text>⭐ {produto.rating}
            </Text>

            <Text style={styles.infoTexto}>
              <Text style={styles.rotulo}>Preço: </Text>R$ {produto.price}
            </Text>

            <Text style={styles.infoTexto}>
              <Text style={styles.rotulo}>Tags: </Text>{produto.tags.join(', ')}
            </Text>
            
            <Text style={[styles.infoTexto, { color: produto.stock > 0 ? 'green' : 'red' }]}>
              <Text style={styles.rotulo}>Disponível: </Text>{produto.stock > 0 ? 'Sim' : 'Não'}
            </Text>
            
          </Card.Content>

        </Card>
      ) : (
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <ActivityIndicator animating={true} color={MD2Colors.red800} size={80}/>
          <Text variant='titleLarge' style={{ fontSize: 20, color: '#000' }}>Aguarde...</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  infoTexto: {
    fontSize: 16,
    marginVertical: 4,
  },
  rotulo: {
    fontWeight: 'bold',
  },
});