import { useCallback, useState } from 'react';
import { FiHome, FiTool, FiMessageCircle, FiHelpCircle } from 'react-icons/fi';

import { Container } from './styles';

export function Dashboard() {
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
    </Container >
  )
}