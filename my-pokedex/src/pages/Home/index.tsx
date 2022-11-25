import { useEffect, useState } from "react";
import { Text } from "react-native";
import { api } from "../../services/api";
import { HomeContainer } from "./styles";

type Request = {
  id: number;
  types: PokemonType[]
}

type PokemonType = {
  type: string;
}
type Pokemon = {
  name: string;
  url: string
  id: number
  types: PokemonType[]
}

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
      {
        pokemons.map(pokemon => (
          <Text>{pokemon.name}</Text>
        ))
      }
    </HomeContainer>
  )
}
