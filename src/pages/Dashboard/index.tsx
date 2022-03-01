import { useCallback, useState } from 'react';
import { FiHome, FiTool, FiMessageCircle, FiHelpCircle, FiUser, FiMail } from 'react-icons/fi';
import { useUsers } from '../../contexts/useUser';

import { Container, User } from './styles';

export function Dashboard() {
  const { users } = useUsers();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback((onOpen: boolean) => {
    setIsOpen(!onOpen)
  }, [])

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
        {users.map(user => (
          <User key={user.id}>


            <h2>
              <span><FiUser size={20} color="#187BD1" /> </span>
              {user.name}
            </h2>

            <p>
              <span><FiMail size={20} color="#187BD1" /></span>
              {user.email}
            </p>
          </User>
        ))}
      </main>
    </Container >
  )
}