import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { AboutContainer } from "./styles";


type AboutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'About'
>;

interface RouteParams {
  pokemonId: number
}

export function About() {
  const navigation = useNavigation()
  const route = useRoute()
  const { pokemonId } = route.params as RouteParams

  return (
    <AboutContainer>

    </AboutContainer>
  )
}
