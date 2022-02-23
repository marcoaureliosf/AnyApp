import { InputHTMLAttributes, useCallback, useState } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Path, UseFormRegister, UseFormWatch, UseWatchProps, WatchInternal, WatchObserver } from 'react-hook-form'
import { InputError } from '../InputError'
import { FiAlertCircle } from 'react-icons/fi'

import { Container, ErrorContainer } from './styles'

interface SignFormData {
  name?: string;
  email?: string;
  password?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  register: UseFormRegister<SignFormData>;
  id: Path<SignFormData>;
  error?: string | any;
  watch?: any;
}

export function Input({ icon: Icon, register, id, error, watch, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!watch(id))
  }, [])
  
  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      {<Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        id={id}
        {...register(id, { onBlur: handleInputBlur })}
        {...rest}
      />

      {error && <ErrorContainer>
        <FiAlertCircle size={20} color='#c53030' />
        <InputError type={error} />
      </ErrorContainer>}
    </Container>
  )
}