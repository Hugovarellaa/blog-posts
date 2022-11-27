import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TypeColors } from ".";

interface TypeProps {
  type: TypeColors
}


export const AboutContainer = styled(ScrollView)``

export const Header = styled.View<TypeProps>`
  background-color: ${({ type, theme }) => theme.colors.backgroundCard[type]};
  height: 340px;
  padding: 20px;
  flex-direction: row;
  align-items: center;

  position: relative;
`

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 70px;
  left: 40px;

`

export const ContentImage = styled.View``

export const CircleImage = styled.Image``

export const PokemonImage = styled.Image``
