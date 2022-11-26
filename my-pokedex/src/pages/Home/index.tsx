import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Card } from "../../components/Card/inde";
import { Pokemon, Request } from "../../interface/pokemons";
import { api } from "../../services/api";
import { Header, HomeContainer, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import pokeballHeader from '../../assets/pokeball.png';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'About'
>;


export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const navigation = useNavigation<HomeScreenNavigationProp>()

  function handleNavigationNextPage(pokemonId: number) {
    navigation.navigate('About', {
      pokemonId
    })
  }

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url)
    const { id, types } = response.data

    return { id, types }
  }

  async function fetchAllPokemon() {
    const response = await api.get('/pokemon')
    const { results } = response.data

    const payloadPokemon = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const { id, types } = await getMoreInfo(pokemon.url)

        return {
          name: pokemon.name,
          id,
          types
        }
      })
    )
    setPokemons(payloadPokemon)
  }

  useEffect(() => {
    fetchAllPokemon()
  }, [])

  return (
    <HomeContainer>
      <FlatList
        data={pokemons}
        ListHeaderComponent={
          <>
            <Header source={pokeballHeader} />
            <Title>Pokédex</Title>
          </>
        }
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={pokemon => String(pokemon.id)}
        renderItem={({ item: pokemon }) => (
          <Card data={pokemon} onPress={() => handleNavigationNextPage(pokemon.id)} />
        )}
        showsVerticalScrollIndicator={false}

      />
    </HomeContainer>
  )
}
