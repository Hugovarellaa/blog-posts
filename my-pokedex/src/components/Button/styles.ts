import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.boxType.water};
  align-items: center;
  justify-content: center;

  border-radius: 20px;
`

export const TitleButton = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.background};
`
