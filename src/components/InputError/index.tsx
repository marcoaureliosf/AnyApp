import { Container } from "./styles";

interface InputErrorProps {
  type: string | any;
}

export function InputError({type}: InputErrorProps) {
  return (
    <Container>
      <span>{type}</span>
    </Container>
  )
}