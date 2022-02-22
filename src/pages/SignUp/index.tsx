import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container } from "./styles";

interface SignUpFormData {
  name?: string;
  email?: string;
  password?: string;
}

export function SignUp() {
  const { register, handleSubmit } = useForm<SignUpFormData>();

  function onSubmit(data: SignUpFormData) {
    console.log(data)

  }

  return (
    <Container>
      <h1>AnyApp</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça seu cadastro</h2>
        <Input name='name' type="text" icon={FiUser} placeholder="Nome" register={register} />
        <Input name='email' type="email" icon={FiMail} placeholder="E-mail" register={register} />
        <Input name='password' type="password" icon={FiLock} placeholder="Senha" register={register} />
        <Button type='submit'>Cadastrar</Button>
      </form>

      <div><FiArrowLeft /> Voltar para logon</div>
    </Container>
  )
}