import React from 'react';
import AccordionItem from './molecules/AccordionItem';

function Card() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobile) {
    return (
      <div className="card">
        <AccordionItem
          title="Presentación"
          content="Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional."
        />
        <AccordionItem
          title="NATACIÓN: ASPECTOS GENERALES"
          content="Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina."
        />
      </div>
    );
  }

  return (
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
      {/* Adicione mais linhas de cards conforme necessário */}
    </div>
  );
}

