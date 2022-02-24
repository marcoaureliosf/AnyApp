import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, RedirectSignUp } from "./styles";

interface SignInFormData {
  email?: string;
  password?: string;
}

export function SignIn() {
  const { register, handleSubmit } = useForm();

  const history = useNavigate();
  
  function onSubmit(data: SignInFormData) {
    
    history('/dashboard')
  }

  return (
    <Container>
      <h1>AnyApp</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça seu logon</h2>
        <Input id='email' type="text" icon={FiMail} placeholder="E-mail" register={register} />
        <Input id='password' type="password" icon={FiLock} placeholder="Senha" register={register} />
        <Button type='submit'>Entrar</Button>
      </form>

      <RedirectSignUp to="/signup" >
        <div>
          <FiLogIn /> Criar uma conta
        </div>
      </RedirectSignUp>
    </Container>
  )
}