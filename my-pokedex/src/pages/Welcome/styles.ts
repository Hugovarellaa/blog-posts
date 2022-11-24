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
  background-color: ${({ theme }) => theme.colors.backgroundCard.water};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`
