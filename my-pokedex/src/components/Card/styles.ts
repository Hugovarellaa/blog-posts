import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface PokemonType {
  type: string
}

export const CardContainer = styled(TouchableOpacity) <PokemonType>`
  border-radius: 10px;
  margin-top: 30px;
  flex-direction: row;
  padding: 20px;
  background-color: ${({ theme, type }) => theme.colors.backgroundCard[type]};
`

export const LeftSize = styled.View`
  width: 50%;
  position: relative;
`

export const PokemonId = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.light_text};
`

export const PokemonName = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.text_white};

  margin-top: 5px;
  text-transform: capitalize;
`

export const PokemonImageCardDetailsLeftSize = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`

export const PokemonContentType = styled.View`
  flex-direction: row;
`

export const PokemonType = styled.View<PokemonType>`
  width: 65px;
  height: 25px;
  padding: 5px;
  border-radius: 3px;
  margin-left: 5px;
  margin-top: 5px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) => theme.colors.boxType[type]};

`

export const PokemonTypeText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.text_white};
  text-transform: capitalize;
`

export const RightSize = styled.View`
  width: 50%;
  align-items: center;
  justify-content: center;
  
  position: relative;
`

export const PokeballDetails = styled.Image`
  position: absolute;
  right: -20px;
  top: -20px
`

export const PokemonImage = styled.Image`
  width: 140px;
  height: 140px;
  margin-top: -40px;
`
