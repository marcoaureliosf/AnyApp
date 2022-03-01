import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

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
  users: UsersFormData[];
  setUsers: (newState: UsersFormData[]) => void;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData)

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<UsersFormData[]>([])

  const createUser = useCallback((data: UsersFormData) => {
    try {
      const newUser = {
        id: users.length + 1,
        name: data.name,
        email: data.email,
        password: data.password
      }

      setUsers([...users, newUser])
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <UsersContext.Provider
      value={{
        createUser,
        users,
        setUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers(): UsersContextData {
  const context = useContext(UsersContext);

  return context;
}