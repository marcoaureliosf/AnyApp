import { FormEvent, useCallback, useState } from 'react';
import { FiHome, FiTool, FiMessageCircle, FiHelpCircle, FiSearch } from 'react-icons/fi';
import { Users } from '../../components/User';
import { useUser } from '../../contexts/useUser';
import { useApi } from '../../hooks/api';
import { useForm } from 'react-hook-form';

import { Container, InputContainer } from './styles';

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const { register, handleSubmit } = useForm();

  const handleClick = useCallback((onOpen: boolean) => {
    setIsOpen(!onOpen)
  }, [])

  const { users, setUsers } = useUser();

  const onSubmit = useCallback(({ filter }: any) => {
    setFilter(filter)
  }, [])

  const { data } = useApi(filter ? `users?q=${filter}` : 'users');

  setUsers(data);

  if (!users) {
    return <h1>Carregando...</h1>
  }

  return (
    <Container isOpen={isOpen}>
      <header>
        <h1>DASHBOARD</h1>

        <div className="menu-section">
          <div onClick={() => handleClick(isOpen)} className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#"><FiHome /> Home</a>
              </li>
              <li>
                <a href="#"><FiTool /> Options</a>
              </li>
              <li>
                <a href="#"><FiMessageCircle /> Notifications</a>
              </li>
              <li>
                <a href="#"><FiHelpCircle /> Help</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <InputContainer onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder='Pesquisar usuários'
            id='filter'
            {...register('filter')}
          />
          <button type="submit"><FiSearch /> Filtrar</button>
        </InputContainer>
        <section>
          <ul>
            {users?.map(user => (
              <Users
                key={user.id}
                name={user.name}
                email={user.email}
              />
            ))}
          </ul>
        </section>
      </main>
    </Container >
  )
}
