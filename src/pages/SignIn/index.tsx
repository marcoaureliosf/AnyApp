
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container } from "./styles";

export function SignIn() {

  return (
    <Container>
      <h1>AnyApp</h1>

      <form>
        <h2>Faça seu logon</h2>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
        <Button type='submit'>Entrar</Button>
      </form>

      <div><FiLogIn /> Criar uma conta</div>
    </Container>
  )
}