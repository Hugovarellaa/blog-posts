import LottieView from 'lottie-react-native';
import { Content, Footer, SubTitle, Title, WelcomeContainer, WrapperAnimation, WrapperImage } from "./styles";

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import pokemonAnimation from '../../assets/pokemon.json';
import { Button } from '../../components/Button';

export function Welcome() {
  const navigation = useNavigation()

  function handleNavigationNextPage() {
    navigation.navigate('Home')
  }

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
        <Button title='Inicar' onPress={handleNavigationNextPage} />
      </Footer>
    </WelcomeContainer>
  )
}
