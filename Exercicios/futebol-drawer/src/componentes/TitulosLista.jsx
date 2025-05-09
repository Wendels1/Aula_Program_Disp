import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function TitulosLista  ({ titulo }) {
  return (
    <Card style={styles.card} mode="contained">
      <Card.Content>
        <Text variant="titleMedium" style={styles.title}>
          {titulo.nome}
        </Text>
        <Text variant="bodyMedium">
          Conquistado em: {titulo.anos.join(', ')}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    marginBottom: 4,
  },
});