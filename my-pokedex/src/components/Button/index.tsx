import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, TitleButton } from "./styles";


interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <TitleButton>{title}</TitleButton>
    </ButtonContainer>
  )
}
