import styles from './Header.module.css'

import logo from '../assets/Logo-unycos.svg'

export function Header() {
  return (
  <header className={styles.header}>
    <div />
    <div className="row">
      <div>
        <img src={logo} alt='logotipo da unycos' />
      </div>
    </div>
    <div className="Nav">
      <button><ul>CURSOS</ul></button>
      <button><ul>REGISTER</ul></button>
      <button><ul>LOG IN</ul></button>
    </div>
  </header>
  );
}