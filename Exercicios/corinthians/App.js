import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  function alerta() {
    alert('Clicou no Botão!!!')
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Corinthians</Text>
        <Image
          source={{
            uri: 'https://images-americanas.b2w.io/produtos/35017235/imagens/adesivo-licenciado-corinthians-emblema-oficial-2018/35017234_1_large.jpg'

          }}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Text>Foi fundado em 1 de setembro de 1910</Text>
        <Text>Bi campeão mundial</Text>
        <Image
          source={{
            uri: 'https://centraldotimao.com.br/wp-content/uploads/2020/05/AE288FEF-2968-4EAD-B7C1-67D4E9851429.jpeg'

          }}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Text>7 Vezes camepão Brasileiro</Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Zkm2O87dMWiGuRQ6m81YqJpq8IdqeARHng&s'

          }}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Text>30 titulos paulistas</Text>
        <Image
          source={{
            uri: 'https://cdn.meutimao.com.br/_upload/noticia/2017/05/11/capitao-na-final-cassio-ergueu-primeiro-trofeu_11.jpg'
          }}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Text>1 Libertadores</Text>
        <Image
          source={{
            uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/corinthians-libertadores-2012-e1720108028700.jpg?w=1200&h=1200&crop=1'
          }}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Button onPress={() => alert('Vai Corinthians')} title="GOL" />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',

  }
});
