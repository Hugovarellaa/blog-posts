import LottieView from 'lottie-react-native';
import { Content, Footer, SubTitle, Title, WelcomeContainer } from "./styles";

import pokemonAnimation from '../../assets/pokemon.json';

export function Welcome() {
  return (
    <WelcomeContainer>

      <Content>
        <LottieView
          autoPlay
          source={pokemonAnimation}
          loop
        />
      </Content>

      <Footer>
        <Title>Bem vindo</Title>
        <SubTitle>Encontre todos os Pokémons em um so lugar</SubTitle>
      </Footer>
    </WelcomeContainer>
  )
}
