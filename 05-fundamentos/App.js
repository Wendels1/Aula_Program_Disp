import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './components/PrimeiroComponente';
import SegundoComponente from './components/SegundoComponente';
import JavascriptComponente from './components/JavascriptComponente';
import Perfi from './components/Perfi';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimeiroComponente />
      <SegundoComponente />
      <JavascriptComponente />
      <Perfi
        nome="Wendel"
        sobrenome="Ferreira"
        idade={21}
        
      />
      <Perfi
        nome="Gustavo"
        Sobrenome="Lima"
        idade={39}
        
      />
      <Perfi
        nome="Maria"
        Sobrenome="Eduarda"
        idade={43}
        
      />
      
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
