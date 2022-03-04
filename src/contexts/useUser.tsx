import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useApi } from '../hooks/api';
import { api } from '../services/api';

interface UserProviderProps {
  children: ReactNode;
}

interface UsersFormData {
  id?: number;
  name?: string | null;
  email: string | null;
  password: string | null;
}

interface UsersContextData {
  createUser: (data: UsersFormData) => void;
  findUserEmail: (data: UsersFormData, id: number) => void;
  users: UsersFormData[];
  setUsers: (newState: UsersFormData[]) => void;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData)

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<UsersFormData[]>([])

  const { mutate } = useApi('users');

  const history = useNavigate();


  const createUser = useCallback(async (data: UsersFormData) => {
    try {
      const newUser = {
        id: Math.floor(Math.random()),
        name: data.name,
        email: data.email,
        password: data.password
      }

      setUsers([...users, newUser])
      await api.post('/users', newUser)
      mutate(newUser, true)

    } catch {
      toast.error('Erro ao tentar criar usuário!')
    }
  }, []);

  const findUserEmail = useCallback(async (data: UsersFormData, id: number) => {

    const response = await api.get(`/users?q=${data.email}`)

    if (id === 0) {
      try {

        const currentUser = response.data[0]

        if (currentUser) {
          toast.error('E-mail já cadastrado!')
        } else {
          createUser(data)
          history('/')
        }

      } catch {
        toast.error('Erro ao tentar cadastrar usuário!')
      }

    } else if (id === 1) {
      try {

        const currentUserEmail = response.data[0].email
        const currentUserPassword = response.data[0].password

        if (currentUserEmail === data.email && currentUserPassword === data.password) {
          history('/dashboard')
          toast.success('Bem vindo!')
        } else {
          toast.error('Usuário não cadastrado!');
        }

      } catch {
        toast.error('Erro ao tentar logar usuário!')
      }
    }

  }, [])

  return (
    <UsersContext.Provider
      value={{
        createUser,
        findUserEmail,
        users,
        setUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUser(): UsersContextData {
  const context = useContext(UsersContext);

  return context;
}