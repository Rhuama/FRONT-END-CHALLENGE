import React, { useState } from 'react';
import { AccordionItem } from '../molecules/AccordionItem';
import { useMediaQuery } from 'react-responsive';
import './Card.css';

export function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const handleClick = () => {
    setIsOpen(!isOpen);
  };
  if(isMobile) {
    return (
      <>
        <h2 className="row col-sm-offset-0 col-xs-offset-3 title">DESTAQUES DEL CURSO</h2>
        <AccordionItem 
          id={"03"}
          content={"Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional."} 
          title={"Bases biomecánicas de la natación"}
        />
        <AccordionItem 
          id={"06"}
          content={"Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional."} 
          title={"Preparación física"}
        />
      </>
     
    );
  } 
  else {
    return (
      <>
        <h2 className="row col-xs-offset-3 col-lg-offset-0 title">LESSON PLAN</h2>
        <div className="container-card">
          <div className="card">
            <div className="row row-card">
              <div className="col-xs-12 col-sm-2 number">01</div>
              <div className="col-xs-10 col-sm-10">
                <h3>Presentación</h3>
                <p>
                  Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su
                  técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.
                </p>
              </div>
            </div>
            <div className="row row-card">
              <div className="col-xs-12 col-sm-2 number">02</div>
              <div className="col-xs-10 col-sm-9">
                <h3>NATACIÓN: ASPECTOS GENERALES</h3>
                <p>
                  Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo
                  más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite
                  los beneficios de esta disciplina.
                </p>
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
      </>
    );
  }
}