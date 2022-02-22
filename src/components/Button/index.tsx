import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

export function Button({children}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Container>
      {children}
    </Container>
  )
}