import LottieView from 'lottie-react-native';
import { Content, Footer, SubTitle, Title, WelcomeContainer, WrapperAnimation, WrapperImage } from "./styles";

import { StatusBar } from 'react-native';
import pokemonAnimation from '../../assets/pokemon.json';
import { Button } from '../../components/Button';

export function Welcome() {
  return (
    <WelcomeContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Content>
        <WrapperAnimation>
          <WrapperImage>
            <LottieView
              autoPlay
              source={pokemonAnimation}
              loop
              style={{
                width: 200,
                height: 200,
              }}
            />
          </WrapperImage>
        </WrapperAnimation>

        <Title>Bem vindo</Title>
        <SubTitle>Encontre todos os Pokémons em um so lugar</SubTitle>
      </Content>
      <Footer>
        <Button title='Inicar' />
      </Footer>
    </WelcomeContainer>
  )
}
