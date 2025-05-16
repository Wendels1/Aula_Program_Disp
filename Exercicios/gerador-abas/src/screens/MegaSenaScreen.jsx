import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Card, Text, Button } from 'react-native-paper';

export default function MegaSenaScreen() {
    const [jogoAtual, setJogoAtual] = useState([]);
    const [historicoJogos, setHistoricoJogos] = useState([]);

    function gerarJogoMegaSena() {

        let numeros = new Set();
        while (numeros.size < 6) {
            numeros.add(Math.floor(Math.random() * 60) + 1);
        }
        const jogo = Array.from(numeros).sort((a, b) => a - b);

        setJogoAtual(jogo);
        setHistoricoJogos([jogo, ...historicoJogos]);
    }

    return (
        <View style={{flex: 1, padding: 10}}>
            <Card style={{marginBottom: 10}}>
                <Card.Content>
                    <Text variant='titleLarge'>Gerador Mega Sena</Text>
                    <Text variant='displayMedium'>{jogoAtual.join(' - ')}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button icon="dice-multiple" mode="contained" onPress={gerarJogoMegaSena}>
                        Gerar Jogo
                    </Button>
                </Card.Actions>
            </Card>

            <Card style={{marginBottom: 10}}>
                <Card.Content>
                    <Text variant='titleMedium'>Histórico de Jogos</Text>
                    <FlatList
                        data={historicoJogos}
                        renderItem={({ item }) => (
                            <Text>{item.join(' - ')}</Text>
                        )}
                    />
                </Card.Content>
            </Card>
        </View>
    );
}
