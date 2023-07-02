import { Header } from "./components/Header";
import styles from './App.module.css'

import Hero from './assets/Hero.png'
import HeroResponsive from './assets/Hero-responsive.svg'
import IconModules from './assets/icon1.png'
import IconHours from './assets/icon2.png'
import IconsGroup from './assets/iconsgroup.png'

import { useMediaQuery } from 'react-responsive';

export function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className="homepage">
      <Header />
      <div className={styles.wrapper}>
        <main>
          <div className="row center-xs">
            {isMobile ? (
              <img src={HeroResponsive} alt="Mulher nadando" />
            ) : (
              <img src={Hero} alt="Mulher caindo na água" />
            )}
          </div>
          <div className="row center-xs">
            <img className="col-xs-10 col-sm-3 icon" src={IconModules} />
            <img className="col-xs-10 col-sm-3 icon" src={IconHours} />
            <button className="col-xs-10 col-sm-4 button">Mas información</button>
          </div>
          <h2 className="row center-xs title">CONTENIDO EXCLUSIVO</h2>
          <div className="row center-xs iconsGroup"><img src={IconsGroup}/></div>
          <h2 className="row center-xs title">LESSON PLAN</h2>

          {/* Componente Card */}

          <div className="wrapper-card">
            <div className="card">
              <div className="row row-card">
                <div className="col-xs-12 col-sm-2 number">01</div>
                <div className="col-xs-10 col-sm-10">
                  <h3>Presentación</h3>
                  <p>Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.</p>
                </div>
              </div>
              <div className="row row-card">
                <div className="col-xs-12 col-sm-2 number">02</div>
                <div className="col-xs-10 col-sm-9">
                  <h3>NATACIÓN: ASPECTOS GENERALES</h3>
                  <p>Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.</p>
                </div>
              </div>
              <div className="row row-card">
                <div className="col-xs-12 col-sm-2 number">03</div>
                <div className="col-xs-10 col-sm-9">
                  <h3>BASES BIOMECÁNICAS DE LA NATACIÓN</h3>
                  <p>Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.</p>
                </div>
              </div>
              <div className="row row-card">
                <div className="col-xs-12 col-sm-2 number">04</div>
                <div className="col-xs-10 col-sm-9">
                  <h3>ESTILOS DE NATACIÓN</h3>
                  <p>Una perfecta ejecución de estos estilos, unida al control y a la resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.</p>
                </div>
              </div>
              <div className="row row-card">
                <div className="col-xs-12 col-sm-2 number">05</div>
                <div className="col-xs-10 col-sm-9">
                  <h3>VIRAJES Y SALTOS</h3>
                  <p>El manejo de los saltos y virajes mejorará considerablemente tu rendimiento y tu técnica de natación. Los profesionales de fama internacional que asisten a Mireia te enseñan a perfeccionar esta técnica.</p>
                </div>
              </div>
              <div className="row row-card">
                <div className="col-xs-12 col-sm-2 number">06</div>
                <div className="col-xs-10 col-sm-9">
                  <h3>PREPARACIÓN FÍSICA DE LA NATACIÓN</h3>
                  <p>Estar en forma va mucho más allá de la piscina. Los preparadores físicos de Mireia te proporcionan una rutina de entrenamiento y tablas de ejercicios que mejorarán tu resistencia, fuerza y flexibilidad para rendir al máximo en el agua.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Componente Form */}
          <form className="form center-xs">
            <h3 className="titleForm">OBTÉN MÁS INFORMACiÓN</h3>
            <div className="row center-xs">
              <div className="col-sm-3 input-form"><input type="text" id="nome" placeholder="Nombre Completo" /></div>
              <div className="col-sm-3 input-form"><input type="email" id="email" placeholder="Correo electrónico" /></div>
            </div>
            <div className="row center-xs">
              <div className="col-sm-3 input-form"><input type="text" id="pais"  placeholder="Correo electrónico"/></div>
              <div className="col-sm-3 input-form"><input type="tel" id="telefone" /></div>
            </div>
            <div className="row center-xs">
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
            </div>
            <div><button className="button" type="submit">Enviar</button></div>
          </form>

        </main>
      </div>
    </div>
  );
}
