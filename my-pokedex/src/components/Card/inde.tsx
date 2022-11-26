import { TouchableOpacityProps } from "react-native";
import {
  CardContainer,
  LeftSize, PokemonContentType, PokemonId, PokemonImageCardDetailsLeftSize, PokemonName, PokemonType,
  PokemonTypeText, RightSize
} from "./styles";

import docsImage from '../../assets/dots.png';

interface PokemonType {
  type: {
    name: string;
  }
}

interface Pokemon {
  id: number
  name: string
  url: string;
  types: PokemonType[]
}

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
              <PokemonType type='bug' key={pokemonType.type.name}>
                <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
              </PokemonType>
            ))
          }

        </PokemonContentType>
      </LeftSize>
      <RightSize></RightSize>
    </CardContainer>
  )
}
