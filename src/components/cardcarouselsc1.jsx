import React, { useState, useEffect } from "react";
import "./CardCarousel.css";
import Imgbuilder from "../assets/images/builder.png";
import Diagramdraft from "../assets/images/diagramadraft.png";
import CodeEditor from "../components/codeeditor1.jsx";
import Nodejs from "../assets/images/nodejs.png";
import ServerFile from "../components/codes/server.txt";
import AutomovilFile from "../components/codes/automovil.txt";
import AutomovilbuilderFile from "../components/codes/automovilBuilder.txt";


const Card1 = () => (
  <div className="card-content">
    <h3>Escenario 1</h3>
    <span className="card-text">
      Imagina que estás desarrollando una aplicación para una compañía
      automotriz que permite a los clientes personalizar y ordenar un automóvil.
      Un objeto Automóvil puede tener muchas configuraciones opcionales: tipo de
      motor, color, llantas, sistema de sonido, interiores, techo solar,
      navegación GPS, etc.
    </span>
    <br />
    <h3>Problema - Escenario 1</h3>
    <span className="card-text">
      Crear un objeto Automóvil con múltiples configuraciones puede llevar a
      constructores con muchos parámetros (el infame "constructor telescópico")
      o a múltiples constructores sobrecargados, lo que dificulta el
      mantenimiento y legibilidad del código.
    </span>
    <br />
    <h3>Beneficios esperados de la solución - Escenario 1</h3>
    <ul className="card-text">
      <li>
        Legibilidad y claridad: Facilitar la creación de objetos complejos con
        muchos parámetros sin necesidad de múltiples constructores o valores por
        defecto.
      </li>
      <li>
        Inmutabilidad: Una vez creado el objeto, sus propiedades no se pueden
        modificar si el constructor lo define como inmutable.
      </li>
      <li>
        Flexibilidad: Poder omitir atributos opcionales sin necesidad de crear
        subclases o múltiples constructores.
      </li>
      <li>
        Separación de construcción y representación: Separar la lógica de
        construcción del objeto en sí, facilitando modificaciones futuras.
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
)

const Card6 = () => {

  const [Codeserver, setCodeserver] = useState("");
  useEffect(() => {
    fetch(ServerFile)
      .then((response) => response.text())
      .then((data) => {
        setCodeserver(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeAutomovil, setCodeAutomovil] = useState("");
  useEffect(() => {
    fetch(AutomovilFile)
      .then((response) => response.text())
      .then((data) => {
        setCodeAutomovil(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeAutomovilBuilder, setCodeAutomovilBuilder] = useState("");
  useEffect(() => {
    fetch(AutomovilbuilderFile)
      .then((response) => response.text())
      .then((data) => {
        setCodeAutomovilBuilder(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);



  return (
    <div>
      <h2>Código Back-End - Node.js</h2>
      <img src={Nodejs} alt="" width={100} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        Estructura del proyecto
      </pre>
      <pre style={{ textAlign: "left" }}>
        /project
        <br />
        ├── server.js
        <br />
        ├── models/
        <br />
        │    ├── automovil.js
        <br />
        │    └── automovilBuilder.js
      </pre>
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        Arcvhivo server.js
      </pre>
      <CodeEditor initialCode={Codeserver} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        Arcvhivo automovil.js
      </pre>
      <CodeEditor initialCode={CodeAutomovil} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        Arcvhivo automovilBuilder.js
      </pre>
      <CodeEditor initialCode={CodeAutomovilBuilder} />
    </div>
  );
}


const Card5 = () => (
  <div>
    <h2>Código Back-End - Node.js</h2>
    <img src={Nodejs} alt="" width={100} />
    <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
      Estructura del proyecto
    </pre>
    <pre style={{ textAlign: "left" }}>
      /project
      <br />
      ├── server.js
      <br />
      ├── models/
      <br />
      │ ├── Automovil.js
      <br />│ └── AutomovilBuilder.js
    </pre>
    <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
      Arcvhivo server.js
    </pre>
    <CodeEditor1 />
  </div>
);


const cards = [Card1, Card2, Card3, Card4, Card6];

const CardCarousel = () => {
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

export default CardCarousel;
