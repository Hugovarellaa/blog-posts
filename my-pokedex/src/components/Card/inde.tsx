import { TouchableOpacityProps } from "react-native";
import { Pokemon } from "../../interface/pokemons";
import {
  CardContainer,
  LeftSize, PokeballDetails, PokemonContentType, PokemonId, PokemonImage, PokemonImageCardDetailsLeftSize, PokemonName, PokemonType,
  PokemonTypeText, RightSize
} from "./styles";

import docsImage from '../../assets/dots.png';
import pokeballImage from '../../assets/pokeballCard.png';
import { FadeAnimation } from "../FadeAnimation";

interface CardProps extends TouchableOpacityProps {
  data: Pokemon
}

export function Card({ data, ...rest }: CardProps) {
  return (
    <CardContainer type={data.types[0].type.name} {...rest}>
      <LeftSize>
        <PokemonId>{`# ${data.id}`}</PokemonId>
        <PokemonName>{data.name}</PokemonName>
        <PokemonImageCardDetailsLeftSize source={docsImage} />

        <PokemonContentType>
          {
            data.types.map(pokemonType => (
              <PokemonType type={pokemonType.type.name} key={pokemonType.type.name}>
                <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
              </PokemonType>
            ))
          }
        </PokemonContentType>
      </LeftSize>

      <RightSize>
        <PokeballDetails source={pokeballImage} />
        <FadeAnimation>
          <PokemonImage
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            }}
          />
        </FadeAnimation>
      </RightSize>
    </CardContainer>
  )
}
