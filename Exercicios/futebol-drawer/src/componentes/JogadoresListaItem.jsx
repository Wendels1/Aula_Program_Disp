import { StyleSheet } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';

export default function JogadoresListaItem  ({jogador}) {

  return (
    <Card style={styles.card} mode="contained">
      <Card.Title
        title={<Text variant="titleMedium">{jogador.nome}</Text>}
        subtitle={`Nº ${jogador.numero} - ${jogador.posicao}`}
        left={() => (
          <Avatar.Image 
            size={46} 
            source={{ uri: jogador.imagem }} 
            style={styles.avatar}
          />
        )}
        right={() => <Text variant="bodyMedium">{jogador.idade} anos</Text>}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  avatar: {
    backgroundColor: 'transparent',
  },
});
