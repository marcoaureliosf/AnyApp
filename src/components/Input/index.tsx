import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

export function Input({ name, icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {<Icon size={20}/>}
      <input type="text" {...rest} />
    </Container>
  )
}