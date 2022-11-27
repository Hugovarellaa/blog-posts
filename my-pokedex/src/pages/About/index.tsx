import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { useTheme } from "styled-components";
import { RootStackParamList } from "../../@types/navigation";
import { api } from "../../services/api";
import { AboutContainer, BackButton, CircleImage, Container, Content, ContentImage, DocImage, Header, PokemonId, PokemonImage, PokemonName, PokemonType, PokemonTypeContainer, PokemonTypeText, Title } from "./styles";

import circleSvg from '../../assets/circle.png';
import dotsSvg from '../../assets/dots.png';
import { FadeAnimation } from '../../components/FadeAnimation';

type AboutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'About'
>;

interface RouteParams {
  pokemonId: number
}

interface Stats {
  base_stat: string;
  stat: {
    name: string
    url: string
  },
}

interface Abilities {
  ability: {
    name: string
    url: string
  },

}

export type TypeColors = 'grass' | 'fire' | 'water' | 'poison' | 'normal' | 'bug' | 'flying' | 'eletric' | 'ground'


export interface PokemonTypeColors {
  type: {
    name: TypeColors
  }
}

type PokemonProps = {
  id: number;
  name: string;
  stats: Stats[]
  abilities: Abilities[]
  color: string
  types: PokemonTypeColors[]
}

export function About() {
  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const [loading, setLoading] = useState(true)

  const { navigate, goBack } = useNavigation()
  const { colors } = useTheme()

  const route = useRoute()
  const { pokemonId } = route.params as RouteParams

  function handleGoBack() {
    goBack()
  }

  async function getPokemonDetails() {
    try {
      const response = await api.get(`/pokemon/${pokemonId}`)
      const { stats, abilities, id, name, types } = response.data

      const currentType = types[0].type.name

      const color = colors.backgroundCard[currentType] as TypeColors

      setPokemon({
        id,
        name,
        types,
        color,
        stats,
        abilities,
      })

    } catch (error) {
      Alert.alert("Opa!", 'Nao foi possível buscar o pokemon tente novamente')
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPokemonDetails()
  }, [])

  return loading ? (
    <Text style={{ marginTop: 200 }}>Carregando...</Text>
  ) : (
    (

      <AboutContainer style={{ flex: 1 }}>
        <Header type={pokemon.types[0].type.name}>
          <BackButton onPress={handleGoBack}>
            <Feather name='chevron-left' size={24} color='#fff' />
          </BackButton>

          <ContentImage>
            <CircleImage source={circleSvg} />
            <FadeAnimation>
              <PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }} />
            </FadeAnimation>
          </ContentImage>

          <Content>
            <PokemonId>{`# ${pokemon.id}`}</PokemonId>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonTypeContainer>
              {
                pokemon.types.map(({ type }) => (
                  <PokemonType type={type.name} key={type.name}>
                    <PokemonTypeText>{type.name}</PokemonTypeText>
                  </PokemonType>
                ))
              }
            </PokemonTypeContainer>
          </Content>
          <DocImage source={dotsSvg} />
        </Header>

        <Container>
          <Title type={pokemon.types[0].type.name}>Base States</Title>
        </Container>
      </AboutContainer>
    )
  )
}
