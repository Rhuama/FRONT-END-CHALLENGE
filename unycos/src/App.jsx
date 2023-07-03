import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "./components/template/Header";
import { Footer } from "./components/template/Footer";
import { Card } from "./components/organisms/Card";

import Hero from "./assets/Hero.png";
import HeroResponsive from "./assets/Hero-responsive.svg";
import IconModules from "./assets/icon1.png";
import IconHours from "./assets/icon2.png";
import IconsGroup from "./assets/iconsgroup.png";

import { useMediaQuery } from "react-responsive";
import { Carousel } from "./components/template/Carousel";

export function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.beta.unycos.com/u/courses/spotlights/natacion", {
        headers: {
          "content-type": "application/json",
          "x-mejor-key": "unycos",
        },
      })
      .then((response) => {
        const { spotlights } = response.data;
        if (spotlights) {
          setItems(spotlights);
        }
      })
      .catch((error) => console.error(error));
  }, [items]);

  return (
    <>
      <Header />
      <div className="homepage">
        <div className="wrapper">
          <div className="row row col-sm-offset-0 col-xs-offset-3 title">
            {isMobile ? (
              <img src={HeroResponsive} alt="Mulher nadando" />
            ) : (
              <img src={Hero} alt="Mulher caindo na água" />
            )}
          </div>
          <div className="row col-sm-offset-0 col-xs-offset-3 title">
            <img className="icon" src={IconModules} />
            <img className="icon" src={IconHours} />
            <a className="button" href="/information">
              Mas información
            </a>
          </div>

          {items.length >= 1 && <Carousel items={items} />}

          <h2 className="row col-sm-offset-0 col-xs-offset-3 title">
            CONTENIDO EXCLUSIVO
          </h2>
          <div className="row center-xs iconsGroup">
            <img src={IconsGroup} />
          </div>

          <Card />

          <h3 className="row col-sm-offset-0 col-xs-offset-3 title">
            OBTÉN MÁS INFORMACiÓN
          </h3>
          <form className="form center-xs">
            <div className="row center-xs">
              <div className="col-lg-3 col-sm-12 input-form">
                <input type="text" id="nome" placeholder="Nombre Completo" />
              </div>
              <div className="col-lg-3 col-sm-12 input-form">
                <input
                  type="email"
                  id="email"
                  placeholder="Correo electrónico"
                />
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-lg-3 col-sm-12 input-form">
                <input type="text" id="pais" placeholder="Correo electrónico" />
              </div>
              <div className="col-lg-3 col-sm-12 input-form">
                <input type="tel" id="telefone" />
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
            </div>
            <div className="row center-xs">
              <button className="button" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
