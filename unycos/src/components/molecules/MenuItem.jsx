import React, { useState } from 'react';
import MenuIcon from '../../assets/bx-menu.png';
import { FaBars } from 'react-icons/fa';
import Select from 'react-dropdown-select';

import "./MenuItem.css"

export function  Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


   return (
     <nav className="navbar">
       <div className="navbar-logo" onClick={toggleMenu}>
         <img src={MenuIcon} />
       </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item"><a href="/cursos">CURSOS</a></li>
        <li className="navbar-item"><a href="/register">REGISTER</a></li>
        <li className="navbar-item"><a href="/login">LOG IN</a></li>
      </ul>
     </nav>
   );
}
