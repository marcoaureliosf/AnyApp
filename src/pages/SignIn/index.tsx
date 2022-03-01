import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUsers } from '../../hooks/useUser';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Content, Background, Gradient } from "./styles";

interface SignInFormData {

  email?: string;
  password?: string;
}

const validationSchema = yup.object({
  email: yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
  password: yup.string().min(6, 'No mínimo 6 digitos')
})

export function SignIn() {

  const { users } = useUsers();

  const InitialValue: SignInFormData = {
    email: '',
    password: ''
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: InitialValue, resolver: yupResolver(validationSchema) });

  const history = useNavigate();

  function onSubmit(data: SignInFormData) {
    try {
      const currentUser = users.find(user => user.email === data.email && user.password === user.password);

      if (currentUser?.email === data.email && currentUser?.password === data.password) {
        history('/dashboard')
      } else {
        toast.error('Usuário não cadastrado!');
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Content>
        <h1><span className='anyapp'>Any</span>App</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Faça seu logon</h2>
          <Input
            id='email'
            type="text"
            icon={FiMail}
            placeholder="E-mail"
            register={register}
            watch={watch}
            error={errors?.email?.type && errors.email.message}
          />
          <Input
            id='password'
            type="password"
            icon={FiLock}
            placeholder="Senha"
            register={register}
            watch={watch}
            error={errors?.password?.type && errors.password.message}
          />
          <Button type='submit'>Entrar</Button>
        </form>
        <Link to="/signup" >
            <FiLogIn /> Criar uma conta
        </Link>
      </Content>

      <Background/>

      <Gradient />
    </Container>
  )
}