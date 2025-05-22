import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Text, Card, Avatar, Divider } from 'react-native-paper'


export default function UsuarioScreen({navigation, route}) {

  
  const idUsuario = route.params
  const [usuario, setUsuario] = useState({})	
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/users/' + idUsuario)
      .then(Resposta => {
        console.log(Resposta.data)
        setUsuario(Resposta.data)
      })
      .catch(erro => {
        alert('Erro ao carregar os dados')
      })

    axios.get('https://dummyjson.com/users/' + idUsuario + '/posts')
      .then(Resposta => {
        console.log(Resposta.data.posts)
        setPosts(Resposta.data.posts)
      })
      .catch(erro => {
        alert('Erro ao carregar os posts')
      })
    }, [])


  return (
    <View>
      <Card>
        <Card.Title 
          title={usuario.firstName + ' ' + usuario.lastName}
          subtitle={usuario.email}
          left={(props) => <Avatar.Image {...props} source={{ uri: usuario.image}} /> }
        />

        <Card.Content>
          <Text variant='titleMedium'>Dados do Usuário</Text>
          <Text>Username: {usuario.username}</Text>
          <Text>Idade: {usuario.age}</Text>
          <Text>Gênero: {usuario.gender}</Text>
          <Text>Telefone: {usuario.phone}</Text>
          <Text>Data de Nascimento: {usuario.birthDate}</Text>
          <Text>Universidade: {usuario.University}</Text>
          <Text></Text>
          <Text variant='titleMedium'>Imagem do usuário:</Text>
          <Text></Text>
          <Text variant='titleMedium'>Posts:</Text>
          {posts.map((post) => (
            <View>
              <Text key={post.id} variant='titleMedium'>{post.title}</Text>
              <Text>{post.body}</Text>
              <Divider />
            </View>
          ))}
          <Card.Cover source={{ uri: usuario.image}} />
        </Card.Content>
      </Card>
      
      
    </View>
  )
}

const styles = StyleSheet.create({})