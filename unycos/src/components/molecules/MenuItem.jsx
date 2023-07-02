import React, { useState } from 'react';
import MenuIcon from '../../assets/bx-menu.png';
import { FaBars } from 'react-icons/fa';
import Select from 'react-dropdown-select';

export function  Menu() {
  const [showMenu, setShowMenu] = useState(false);
   const [isOpen, setIsOpen] = useState(false);


     const toggleDropdown = () => {
     setIsOpen(!isOpen);
   };

   return (
     <div className="dropdown">
       <div className="col-sm-12 menu" onClick={toggleDropdown}>
         <img src={MenuIcon} />
       </div>
       {isOpen && (
         <div className="col-sm-0 end-sm">
           <div className="nav">
             <a href="/cursos"><ul>CURSOS</ul></a>
             <a href="/register"><ul>REGISTER</ul></a>
             <a href="/login"><ul>LOG IN</ul></a>
           </div>
         </div>
       )}
     </div>
   );
}
