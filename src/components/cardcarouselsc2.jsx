import React, { useState, useEffect } from "react";

import "./CardCarousel.css";

import Imgbridge from "../assets/images/bridge.png";
import Formas from "../assets/images/formas.png";
import Diagram from "../assets/images/bridgediagram.jpg";
import CodeEditor from "../components/codeeditor1.jsx";
import Nodejs from "../assets/images/nodejs.png";

import Notificacion from "../components/bnridgecodes/Notificacion.txt";
import NotificacionAlerta from "../components/bnridgecodes/NotificacionAlerta.txt";
import NotificacionFactory from "../components/bnridgecodes/NotificacionFactory.txt";
import NotificacionMensaje from "../components/bnridgecodes/NotificacionMensaje.txt";
import PlataformaEscritorio from "../components/bnridgecodes/PlataformaEscritorio.txt";
import PlataformaFactory from "../components/bnridgecodes/PlataformaFactory.txt";
import PlataformaMovil from "../components/bnridgecodes/PlataformaMovil.txt";
import PlataformaWeb from "../components/bnridgecodes/PlataformaWeb.txt";
import Server from "../components/bnridgecodes/server.txt";



const Card1 = () => (
  <div className="card-content">
    <h3>Escenario 1</h3>
    <span className="card-text" style={{lineHeight: '1.8'}}>
      Estás desarrollando una aplicación que gestiona la visualización de
      notificaciones en diferentes plataformas (por ejemplo: escritorio, móvil,
      web). Las notificaciones pueden ser de distintos tipos (mensaje, alerta,
      advertencia, confirmación) y cada tipo puede mostrarse de distintas formas
      según la plataforma.
    </span>
    <br />
    <h3>Problema - Escenario 1</h3>
    <span className="card-text">
      Si usas herencia tradicional, tendrías que crear clases como:
    </span>
    <br />
    <ul className="card-text">
      <li>
        NotificacionMensajeWeb, NotificacionAlertaWeb, NotificacionMensajeMovil,
        NotificacionAlertaMovil, etc.
      </li>
    </ul>
    <br />
    <span className="card-text">
      Esto lleva rápidamente a una explosión combinatoria de subclases difíciles
      de mantener.
    </span >
    <h3>Beneficios esperados de la solución - Escenario 1</h3>
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
      <h4>Patrón Estructural - BRIDGE</h4>

      <div className="card-image">
        <img src={Imgbridge} alt="builder/image" width={150} />
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
      Permite dividir una clase grande o un grupo de clases estrechamente
      relacionadas, en dos jerarquías separadas (abstracción e implementación)
      que pueden desarrollarse independientemente la una de la otra.
    </span>

    <hr />

    <div className="card-image">
      <img src={Formas} alt="builder/image" width={550} />
      <span className="card-hiden-text">
        Imagen tomada de{" "}
        <a href="https://refactoring.guru/" target="_blank">
          {" "}
          https://refactoring.guru/
        </a>
      </span>
    </div>
    <span className="card-text-4">
      Este patrón resuelve el problema que se presenta porque intentamos
      extender las clases en dos dimensiones independientes: por tipo de
      plataforma y por tipo de notificación. Es un problema muy habitual en la
      herencia de clases. El patrón BRIDGE intenta resolver este problema
      pasando de la herencia a la composición del objeto. Esto quiere decir que
      se extrae una de las dimensiones a una jerarquía de clases separada, de
      modo que las clases originales referencian un objeto de la nueva
      jerarquía, en lugar de tener todo su estado y sus funcionalidades dentro
      de una clase. 😮
    </span>

    <hr />

    <span></span>
  </div>
);
const Card3 = () => (
  <div className="card-content">
    <h3>Justificación</h3>

    <span className="card-text-4">
      Al escoger este patrón BRIDGE se tienen los siguientes beneficios lo que
      justifica su uso:
    </span>
    <hr />
    <h3>Beneficios </h3>
    <span className="card-text-4">
      <ol>
        <li>Separación de responsabilidades</li>
        <ul>
          <li>La notificación define el tipo y comportamiento lógico.</li>
          <li>La plataforma define cómo se renderiza.</li>
        </ul>
        <br />
        <li>Escalabilidad </li>
        <pre>Para agregar una nueva plataforma:</pre>
        <ul>
          <li>Solo creas PlataformaTV (por ejemplo).</li>
          <li>• No modificas las clases de notificación.</li>
        </ul>
        <pre>Para agregar un nuevo tipo:</pre>
        <ul>
          <li>Creas NotificacionErrorCritico.</li>
          <li>No modificas las plataformas.</li>
        </ul>
        <pre>Se cumple con Open/Closed Principle</pre>
        <br />
        <li>Reducción de clases </li>
        <pre>En vez de: 4 tipos × 3 plataformas = 12 clases</pre>
        <pre>Se tiene: 4 clases de notificación 3 clases de plataforma</pre>
        <pre>Total = 7 clases Escala</pre>
        <pre>Crecimiento lineal, No multiplicativamente.</pre>
      </ol>
    </span>
  </div>
);
const Card4 = () => (
  <div className="card-content">
    <h3>Diagrama de Clases</h3>

    <img
      src={Diagram}
      alt="Diagrama de Clases"
      style={{
        width: "100%",
        objectFit: "cover", // <-- Así se aplica
      }}
    />
    <pre>Creado con claude.ai</pre>
  </div>
);
const Card5 = () => {
  const [CodeNotificacion, setCodeNotificacion] = useState("");
  useEffect(() => {
    fetch(Notificacion)
      .then((response) => response.text())
      .then((data) => {
        setCodeNotificacion(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeNotificacionAlerta, setCodeNotificacionAlerta] = useState("");
  useEffect(() => {
    fetch(NotificacionAlerta)
      .then((response) => response.text())
      .then((data) => {
        setCodeNotificacionAlerta(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeNotificacionFactory, setCodeNotificacionFactory] = useState("");
  useEffect(() => {
    fetch(NotificacionFactory)
      .then((response) => response.text())
      .then((data) => {
        setCodeNotificacionFactory(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeNotificacionMensaje, setCodeNotificacionMensaje] = useState("");
  useEffect(() => {
    fetch(NotificacionMensaje)
      .then((response) => response.text())
      .then((data) => {
        setCodeNotificacionMensaje(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodePlataformaEscritorio, setCodePlataformaEscritorio] = useState("");
  useEffect(() => {
  fetch(PlataformaEscritorio)
    .then((response) => response.text())
    .then((data) => {
      setCodePlataformaEscritorio(data);
    })
    .catch((error) => {
      console.error("Error cargando el archivo:", error);
    });
  }, []);

  const [CodePlataformaFactory, setCodePlataformaFactory] = useState("");
  useEffect(() => {
  fetch(PlataformaFactory)
    .then((response) => response.text())
    .then((data) => {
      setCodePlataformaFactory(data);
    })
    .catch((error) => {
      console.error("Error cargando el archivo:", error);
    });
  }, []);

  const [CodePlataformaMovil, setCodePlataformaMovil] = useState("");
  useEffect(() => {
  fetch(PlataformaMovil)
    .then((response) => response.text())
    .then((data) => {
      setCodePlataformaMovil(data);
    })
    .catch((error) => {
      console.error("Error cargando el archivo:", error);
    });
  }, []);

  const [CodePlataformaWeb, setCodePlataformaWeb] = useState("");
  useEffect(() => {
  fetch(PlataformaWeb)
    .then((response) => response.text())
    .then((data) => {
      setCodePlataformaWeb(data);
    })
    .catch((error) => {
      console.error("Error cargando el archivo:", error);
    });
  }, []);

  const [CodeServer, setCodeServer] = useState("");
  useEffect(() => {
  fetch(Server)
    .then((response) => response.text())
    .then((data) => {
      setCodeServer(data);
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
        {`
      src/
      ├── abstractions/
      │       Notificacion.js
      │
      ├── implementations/
      │       PlataformaWeb.js
      │       PlataformaMovil.js
      │       PlataformaEscritorio.js
      │
      ├── types/
      │       NotificacionMensaje.js
      │       NotificacionAlerta.js
      │       NotificacionAdvertencia.js
      │       NotificacionConfirmacion.js
      │
      ├── factories/
      │       PlataformaFactory.js
      │       NotificacionFactory.js
      │
      └── server.js`}
      </pre>
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        abstractions/Notificacion.js
      </pre>
      <CodeEditor initialCode={CodeNotificacion} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        implementations/PlataformaWeb.js
      </pre>
      <CodeEditor initialCode={CodeNotificacionAlerta} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        implementations/PlataformaMovil.js
      </pre>
      <CodeEditor initialCode={CodeNotificacionFactory} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        implementations/PlataformaEscritorio.js
      </pre>
      <CodeEditor initialCode={CodeNotificacionMensaje} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        types/NotificacionMensaje.js
      </pre>
      <CodeEditor initialCode={CodePlataformaEscritorio} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        types/NotificacionAlerta.js
      </pre>
      <CodeEditor initialCode={CodePlataformaFactory} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        factories/PlataformaFactory.js
      </pre>
      <CodeEditor initialCode={CodePlataformaMovil} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        factories/NotificacionFactory.js
      </pre>
      <CodeEditor initialCode={CodePlataformaWeb} />
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        server.js
      </pre>
      <CodeEditor initialCode={CodeServer} />
    </div>
  );
};
const Card6 = () => {

  const [jsonInput, setJsonInput] = useState(`{
  "tipo": "alerta",
  "plataforma": "web",
  "titulo": "Sistema",
  "mensaje": "Hay una actualización disponible"
}`);

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponseData(null);

    try {
      // Convertimos el texto a objeto JSON
      const parsedJson = JSON.parse(jsonInput);

      const response = await fetch("http://localhost:3000/api/notificaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedJson),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en el servidor");
      }

      setResponseData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      {/* Parte izquierda */}
      <div style={{ flex: 1 }}>
        <h2>Enviar JSON</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="12"
            style={{ width: "100%", fontFamily: "monospace" }}
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
          <br />
          <button type="submit" style={{ marginTop: "10px" }}>
            Enviar
          </button>
        </form>
      </div>

      {/* Parte derecha */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <h2>Respuesta del servidor</h2>

        {error && (
          <div style={{ color: "red" }}>
            <strong>Error:</strong> {error}
          </div>
        )}

        {responseData && (
          <pre style={{ background: "#f4f4f4", padding: "10px" }}>
            {JSON.stringify(responseData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

const cards = [Card1, Card2, Card3, Card4, Card5, Card6];

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
