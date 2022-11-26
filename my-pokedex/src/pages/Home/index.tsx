import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Card } from "../../components/Card/inde";
import { FadeAnimation } from "../../components/FadeAnimation";
import { Pokemon, Request } from "../../interface/pokemons";
import { api } from "../../services/api";
import { HomeContainer } from "./styles";


export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])


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
        keyExtractor={pokemon => String(pokemon.id)}
        renderItem={({ item: pokemon }) => (
          <FadeAnimation>
            <Card data={pokemon} />
          </FadeAnimation>
        )}
        showsVerticalScrollIndicator={false}
      />
    </HomeContainer>
  )
}
