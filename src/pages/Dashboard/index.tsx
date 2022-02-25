import { useState } from 'react';
import {FiHome, FiTool, FiMessageCircle, FiHelpCircle} from 'react-icons/fi';

import { Container } from './styles';

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleClick() {
    setIsOpen(!isOpen)
  }
  
  return (
    <Container onOpen={isOpen}>
      <header>
        <div className='container'>
          <h1>DASHBOARD</h1>
        </div>
        <div className="menu-section">
          <div onClick={handleClick} className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#"><FiHome/> Home</a>
              </li>
              <li>
                <a href="#"><FiTool/> Options</a>
              </li>
              <li>
                <a href="#"><FiMessageCircle/> Notifications</a>
              </li>
              <li>
                <a href="#"><FiHelpCircle/> Help</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Container >
  )
}