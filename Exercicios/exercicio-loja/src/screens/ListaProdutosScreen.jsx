import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ListaProdutosScreen(navigation, route) {

  const { categoria } = route.params
  const [produto, setProduto] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list/' + categoria)
      .then(resposta => {
        console.log(resposta.data)
        setProduto(resposta.data)
      })
      .catch(erro => {
        alert('Erro ao carregar os dados')
      })
  }, [])

  return (
    <View>
      <Text>ListaProdutosScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})