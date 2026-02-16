import React, { useState } from "react";
import "./CardCarousel.css";
import Imgbuilder from "../assets/images/builder.png";
import Diagramdraft from "../assets/images/diagramadraft.png";


const Card1 = () => (
  <div className="card-content">
    <h3>Escenario 2</h3>
    <span className="card-text">
      Estás desarrollando una aplicación que gestiona la visualización de
      notificaciones en diferentes plataformas (por ejemplo: escritorio, móvil,
      web). Las notificaciones pueden ser de distintos tipos (mensaje, alerta,
      advertencia, confirmación) y cada tipo puede mostrarse de distintas formas
      según la plataforma.
    </span>
    <br />
    <h3>Problema - Escenario 2</h3>
    <span className="card-text">
      Si usas herencia tradicional, tendrías que crear clases como:
      °NotificacionMensajeWeb, NotificacionAlertaWeb, NotificacionMensajeMovil,
      NotificacionAlertaMovil, etc. Esto lleva rápidamente a una explosión
      combinatoria de subclases difíciles de mantener.
    </span>
    <br />
    <h3>Beneficios esperados de la solución - Escenario 2</h3>
    <ul className="card-text">
      <li>
        Separación de responsabilidades: Separar la lógica de la notificación
        del medio por el que se presenta.
      </li>
      <li>
        Escalabilidad: Poder agregar nuevas plataformas o tipos de notificación
        sin modificar el resto del sistema.
      </li>
      <li>
        Reducción de clases: Evitar la multiplicación de clases para cada
        combinación.
      </li>
      <li>
        Flexibilidad en tiempo de ejecución: Poder cambiar la plataforma
        dinámicamente si es necesario.
      </li>
    </ul>
  </div>
);
const Card2 = () => (
  <div className="card-content">
    <h3>Patrón escogido</h3>

    <div>
      <h4>Patrón creacional - BUILDER</h4>

      <div className="card-image">
        <img src={Imgbuilder} alt="builder/image" width={150} />
        <span className="card-hiden-text">
          Imagen tomada de{" "}
          <a href="https://refactoring.guru/" target="_blank">
            {" "}
            https://refactoring.guru/
          </a>
        </span>
      </div>
    </div>

    <span className="card-text-4">
      Permite construir objetos complejos paso a paso. Este patrón nos permite
      producir distintos tipos y representaciones de un objeto empleando el
      mismo código de construcción.
    </span>
  </div>
);
const Card3 = () => (
  <div className="card-content">
    <h3>Justificación</h3>

    <span className="card-text-4">
      Permite construir objetos complejos paso a paso. Este patrón nos permite
      producir distintos tipos y representaciones de un objeto empleando el
      mismo código de construcción.
    </span>
  </div>
);
const Card4 = () => (
  <div className="card-content">
    <h3>Diagrama</h3>
    <img className="card-text-4" src={Diagramdraft} alt="" />
  </div>
);
const Card5 = () => <div className="card-content">Componente 5</div>;

const cards = [Card1, Card2, Card3, Card4, Card5];

const CardCarouse3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };


  const CurrentCard = cards[currentIndex];

  return (
    <div className="carousel-container">
      <button
        className="nav-button left"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        ◀
      </button>

      <div className="card">
        <CurrentCard />
      </div>

      <button
        className="nav-button right"
        onClick={handleNext}
        disabled={currentIndex === cards.length - 1}
      >
        ▶
      </button>
    </div>
  );
};

export default CardCarouse3;