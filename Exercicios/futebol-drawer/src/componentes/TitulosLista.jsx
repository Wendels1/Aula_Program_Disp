import React from 'react';
import { List } from 'react-native-paper';

const TitulosLista = ({ titulo }) => {
  return (
    <List.Item
      title={titulo.nome}
      description={`Conquistado em: ${titulo.anos.join(', ')}`}
      left={() => <List.Icon icon="trophy" />}
    />
  );
};

export default TitulosLista;