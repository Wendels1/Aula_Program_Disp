import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './components/PrimeiroComponente';
import JavascriptComponente from './components/JavascriptComponente';
import Perfil from './components/Perfil';
import listaComponentes from './components/listaComponentes';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Perfil 
    //     nome = "Wendel Ferreira Santos"
    //     idade = {21}
    //     telefone = "999999999"
    //     email = "Wendel@gmail.com"
    //   />
    //   <Perfil
    //     nome = "Magno Ferreira Santos"
    //     idade = {23}
    //     telefone = "7777777"
    //     email = "Magno@gmail.com"
    //   />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
