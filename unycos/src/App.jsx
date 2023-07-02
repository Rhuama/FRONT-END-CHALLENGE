import { Header } from "./components/template/Header";
import { Footer } from "./components/template/Footer";
import { Card } from "./components/organisms/Card";
import './App.css'

import Hero from './assets/Hero.png'
import HeroResponsive from './assets/Hero-responsive.svg'
import IconModules from './assets/icon1.png'
import IconHours from './assets/icon2.png'
import IconsGroup from './assets/iconsgroup.png'

import { useMediaQuery } from 'react-responsive';

export function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      <Header />
      <div className="homepage">
      <div className='wrapper'>
          <div className="row row col-sm-offset-0 col-xs-offset-3 title">
            {isMobile ? (
              <img src={HeroResponsive} alt="Mulher nadando" />
            ) : (
              <img src={Hero} alt="Mulher caindo na água" />
            )}
          </div>
          <div className="row col-sm-offset-0 col-xs-offset-3 title">
            <img className="col-xs-10 col-sm-3 icon" src={IconModules} />
            <img className="col-xs-10 col-sm-3 icon" src={IconHours} />
            <button className="col-xs-10 col-sm-4 button">Mas información</button>
          </div>
          <h2 className="row col-sm-offset-0 col-xs-offset-3 title">CONTENIDO EXCLUSIVO</h2>
          <div className="row center-xs iconsGroup"><img src={IconsGroup}/></div>

          {/* Componente Card */}
          <Card />

          {/* Componente Form */}
          <h3 className="row col-sm-offset-0 col-xs-offset-3 title">OBTÉN MÁS INFORMACiÓN</h3>
          <form className="form center-xs">
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
      </div>
      <Footer/>
    </div>
    </>
  );
}
