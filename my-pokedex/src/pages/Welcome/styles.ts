import styled from "styled-components/native";

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Content = styled.View`
  height: 80%;
`
export const Footer = styled.View`
  height: 30%;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundCard.water};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.background};
  margin-top: 20px;

`

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.background};
  margin-top: 20px;
`
