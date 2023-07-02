import styles from './Thumb.module.css'


export function Header() {
  return (
  <Main className={styles.wrapper}>
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
  </Main>
  );
}