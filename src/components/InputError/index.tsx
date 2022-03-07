import { Container } from "./styles";

interface InputErrorProps {
  type: string | null;
}

export function InputError({ type }: InputErrorProps) {
  return (
    <Container>
      <span>{type}</span>
    </Container>
  )
}