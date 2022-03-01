import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUsers } from '../../hooks/useUser';
import { toast } from 'react-toastify';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Content, Background, Gradient } from "./styles";

import { Link, useNavigate } from 'react-router-dom';

interface SignUpFormData {
  name?: string;
  email?: string;
  password?: string;
}

const validationSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
  password: yup.string().min(6, 'No mínimo 6 digitos')
})

export function SignUp() {

  const { createUser, users } = useUsers()

  const InitialValue: SignUpFormData = {
    name: '',
    email: '',
    password: ''
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: InitialValue, resolver: yupResolver(validationSchema) });

  const history = useNavigate();

  function onSubmit(data: SignUpFormData) {
    const currentUser = users.find(users => users.email === data.email)

    if (currentUser) {
      toast.error('E-mail já cadastrado!')
    } else {
      createUser(data)
      history('/')
    }

  }

  return (
    <Container>
      <Content>
        <h1><span className='anyapp'>Any</span>App</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Faça seu cadastro</h2>
          <Input
            id='name'
            type="text" icon={FiUser}
            placeholder="Nome"
            register={register}
            watch={watch}
            error={errors?.name?.type && errors.name.message}
          />
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
          <Button type='submit'>Cadastrar</Button>
        </form>
        <Link to="/" >
          <FiArrowLeft size={20} /> Voltar para logon
        </Link>
      </Content>

      <Background />

      <Gradient />
    </Container>
  )
}