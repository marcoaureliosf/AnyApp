import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container } from './styles'
import { Path, UseFormRegister } from 'react-hook-form'

interface SignInFormData {
  name?: string;
  email?: string;
  password?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  register: UseFormRegister<SignInFormData>;
  name: Path<SignInFormData>;
}

export function Input({ icon: Icon, register, name, ...rest }: InputProps) {

  return (
    <Container>
      {<Icon size={20} />}
      <input {...register(name)} {...rest} />
    </Container>
  )
}