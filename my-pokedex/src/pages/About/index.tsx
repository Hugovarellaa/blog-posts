import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { AboutContainer } from "./styles";

type AboutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'About'
>;

export function About() {
  return (
    <AboutContainer>

    </AboutContainer>
  )
}
