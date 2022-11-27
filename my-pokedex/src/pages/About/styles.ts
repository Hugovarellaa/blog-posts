import { ScrollView, TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';
import styled from "styled-components/native";
import { TypeColors } from ".";

interface TypeProps {
  type: TypeColors
}


export const AboutContainer = styled(ScrollView)`
  background-color: ${({ theme }) => theme.colors.background};
`

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

export const ContentImage = styled.View`
  position: relative;
`

export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`
export const Content = styled.View`
  margin-left: 30px;
`

export const PokemonId = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light_text};
`
export const PokemonName = styled.Text`
  font-size: 28px;
  line-height: 38px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_white};

  text-transform: capitalize;
`
export const PokemonTypeContainer = styled.View`
  flex-direction: row;
`
export const PokemonType = styled.View<TypeProps>`
  width: 61px;
  height: 25px;
  background-color: ${({ theme, type }) => theme.colors.boxType[type]};
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-top: 10px;
`

export const PokemonTypeText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_white};

  text-transform: capitalize;

  text-align: center;
  justify-content: center;
`
export const DocImage = styled.Image`
  width: 85px;
  position: absolute;
  right: -20px;
  top: 220px;
`

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  margin-top: -40px;
`
export const Title = styled.Text<TypeProps>`
  font-size: 16px;
  line-height: 19px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme, type }) => theme.colors.boxType[type]};
  padding: 20px;
  

`
export const StatusBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;

`
export const Atributes = styled.Text`
  width: 110px;
  font-size: 12px;
  line-height: 14px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
  text-align: right;
  color: ${({ theme }) => theme.colors.light_text};
`
export const AtributesValue = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.detail};
  margin-left: 20px;
`
export const ContentBar = styled.View`
  margin-left: 20px;
`
export const ProgressBar = styled(Progress.Bar) <TypeProps>``

export const Abilities = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding: 10px 20px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.detail};
`
