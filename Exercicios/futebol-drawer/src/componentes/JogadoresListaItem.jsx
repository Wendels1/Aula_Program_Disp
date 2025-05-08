import React from 'react';
import { Image } from 'react-native';
import { List } from 'react-native-paper';

const JogadoresListaItem = ({ jogador }) => {
  return (
    <List.Item
      title={jogador.nome}
      description={`Nº ${jogador.numero} - ${jogador.posicao}`}
      left={() => (
        <Image
          source={{ uri: jogador.imagem }}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
        />
      )}
    />
  );
};

export default JogadoresListaItem;