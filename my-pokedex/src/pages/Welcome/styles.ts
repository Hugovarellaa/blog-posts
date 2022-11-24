import styled from "styled-components/native";

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundCard.water};

`
export const Content = styled.View`
  height: 80%;

  align-items: center;
  justify-content: center;
`

export const WrapperAnimation = styled.View`
  width: 200px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.boxType.water};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  transform: rotate(30deg);
`

export const WrapperImage = styled.View`
  transform: rotate(-30deg);

`

export const Footer = styled.View`
  height: 30%;

  align-items: center;
  padding: 20px;
  padding-top: 50px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  
`

export const Title = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.background};
  margin-top: 20px;

`

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background};
  margin-top: 20px;
`
