import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function EscudoScreen  () {
  const time = {
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg"
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: time.escudo }}
        style={styles.escudo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  escudo: {
    width: 300,
    height: 300,
  },
});