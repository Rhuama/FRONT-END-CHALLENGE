import './Header.css';
import logo from '../../assets/Logo-unycos.svg';
import { useMediaQuery } from 'react-responsive';
import { Menu }  from '../molecules/MenuItem';

export function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if(isMobile) {
    return (
      <header className="header">
        <div className="row between-sm">
          <div></div>
          <div className="col-sm-2">
            <img src={logo} alt='logotipo da unycos' />
          </div>
          <Menu/>
        </div>
      </header>
    );
  }
  else {
    return (
      <header className='header'>
        <div className="col-sm-4">
          <img src={logo} alt='logotipo da unycos' />
        </div>
        <div className="col-sm-3 end-sm nav">
          <a href="/cursos"><ul>CURSOS</ul></a>
          <a href="/register"><ul>REGISTER</ul></a>
          <a href="/login"><ul>LOG IN</ul></a>
        </div>
      </header>
    );
  }
};