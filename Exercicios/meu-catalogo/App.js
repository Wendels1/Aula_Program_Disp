import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filme from './components/Filme';
import Serie from './components/Serie';

export default function App() {
  
  const listaFilmes = [
    {
    nome: "A Doce Vida",
    ano: 1960,
    diretor: "Federico Fellini",
    tipo: "Drama",
    capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
    },
    {
    nome: "Psicose",
    ano: 1960,
    diretor: "Alfred Hitchcock",
    tipo: "Terror",
    capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PQJNWdxQjrM7rs6PfbtYQV-5tbloKD91sA&s" 
    },
    {
    nome: "O Beijo da Mulher Aranha",
    ano: 1985,
    diretor: "Hector Babenco",
    tipo: "Drama",
    capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
    },
    {
    nome: "Poltergeist - O Fenômeno",
    ano: 1982,
    diretor: "Tobe Hooper",
    tipo: "Terror",
    capa: "https://s2-valor.glbimg.com/WmX38DIu0qk28AWg-Rx8Hh2P6ug=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/F/v/tjcJldRtqjIq0mNvwKIw/foto02cul-201-dvd2-d30.jpg"
    }, 
  ];

  const listaSeries = [
    {
    nome: "Buffy, a Caça-Vampiros",
    ano: 1997,
    diretor: "Joss Whedon",
    temporadas: 7,
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png"
    },
    {
    nome: "Desperate Housewives",
    ano: 2004,
    diretor: "Marc Cherry",
    temporadas: 8,
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png"
    },
    {
    nome: "Sons of Anarchy",
    ano: 2008,
    diretor: "Kurt Sutter",
    temporadas: 7,
    capa: "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
    }
    ];

  return (

  <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        listaFilmes.map(
          filme => {
            return (
              <Filme
                nome={filme.nome}
                ano={filme.ano}
                diretor={filme.diretor}
                genero={filme.tipo}
                capa={filme.capa}
              />
            )
          }
        )
      }

      {
        listaSeries.map(
          serie => {
            return (
              <Serie
                nome={serie.nome}
                ano={serie.ano}
                diretor={serie.diretor}
                temporadas={serie.temporadas}
                capa={serie.capa}
              />
            )
          }
        )
      }
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
});
