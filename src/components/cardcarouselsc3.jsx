import React, { useEffect, useState } from "react";
import "./CardCarousel.css";
import Mediatordiagram from "../assets/images/mediatordiagram.jpg";
import Mediator from "../assets/images/mediator.png";
import CodeEditor from "../components/codeeditor1.jsx";
import Nodejs from "../assets/images/nodejs.png";

import ChatMediator from "../components/mediatorcodes/ChatMediator.txt";
import ChatRoomMediator from "../components/mediatorcodes/ChatRoomMediator.txt";
import User from "../components/mediatorcodes/User.txt";
import ChatService from "../components/mediatorcodes/ChatService.txt";
import ChatController from "../components/mediatorcodes/ChatController.txt";
import Server from "../components/mediatorcodes/server.txt";	


const Card1 = () => (
  <div className="card-content">
    <h3>Escenario 3</h3>
    <span className="card-text">
      Estás desarrollando una aplicación de chat grupal. Los usuarios pueden
      enviarse mensajes entre sí dentro de una sala de chat. Sin embargo,
      gestionar las interacciones directas entre cada usuario haría que cada uno
      deba conocer y comunicarse con todos los demás, lo que resulta en una alta
      dependencia entre objetos.
    </span>
    <br />
    <h3>Problema - Escenario 3</h3>
    <span className="card-text">
      Sin un mediador, cada usuario tendría que mantener referencias directas a
      todos los demás, lo que genera un sistema difícil de escalar y mantener.
      Si agregas o eliminas usuarios, debes actualizar muchas relaciones.
    </span>
    <br />
    <h3>Beneficios esperados de la solución - Escenario 3</h3>
    <ol className="card-text">
      <li>
        Facilita el mantenimiento: Agregar o eliminar usuarios no debe requerir
        modificar los demás.
      </li>
      <li>
        Mejor organización: La lógica de comunicación debe estar centralizada,
        no dispersa en muchos objetos.
      </li>
      <li>
        Reduce la complejidad: Evitar una red enmarañada de interacciones punto
        a punto.
      </li>
    </ol>
  </div>
);
const Card2 = () => (
  <div className="card-content">
    <h3>Patrón escogido - Escenario 3</h3>

    <div>
      <h4>Patrón Comportamental - MEDIATOR</h4>

      <div className="card-image">
        <img src={Mediator} alt="builder/image" width={150} />
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
      Permite reducir las dependencias caóticas entre objetos. El patrón
      restringe las comunicaciones directas entre los objetos, forzándolos a
      colaborar únicamente a través de un objeto mediador.
    </span>
  </div>
);
const Card3 = () => (
  <div className="card-content">
    <h3>Justificación</h3>
    <pre style={{ textAlign: "left" }} className="card-text-4">
      {`
      Permite reducir las dependencias caóticas entre objetos. El patrón
      restringe las comunicaciones directas entre los objetos, forzándolos a
      colaborar únicamente a través de un objeto mediador.
      `}
    </pre>
    <pre style={{ textAlign: "left" }} className="card-text-4">
      {`
      El patrón Mediator, está diseñado específicamente para gestionar la 
      comunicación entre múltiples objetos reduciendo el acoplamiento directo 
      entre ellos.
      `}
    </pre>
    <h4>Beneficios obtenidos</h4>
    <pre style={{ textAlign: "left" }} className="card-text-4">
      {`
        Reducción del acoplamiento
        Los usuarios dejan de depender unos de otros. 
        Solo dependen de una abstracción (el mediador).
      `}
    </pre>
    <pre style={{ textAlign: "left" }} className="card-text-4">
      {`
        Centralización de la lógica

        La lógica de comunicación se concentra en un único componente: 
          °Registro de usuarios 
          °Distribución de mensajes 
          °Reglas de interacción 

        Esto mejora la organización del sistema.
      `}
    </pre>
  </div>
);
const Card4 = () => (
  <div className="card-content">
    <h3>Diagrama</h3>
    <img className="card-text-4" src={Mediatordiagram} alt="" width={700} />
  </div>
);
const Card5 = () => {
  
  const [CodeChatMediator, setCodeChatMediator] = useState("");
  useEffect(() => {
    fetch(ChatMediator)
      .then((response) => response.text())
      .then((data) => {
        setCodeChatMediator(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeChatRoomMediator, setCodeChatRoomMediator] = useState("");
  useEffect(() => {
    fetch(ChatRoomMediator)
      .then((response) => response.text())
      .then((data) => {
        setCodeChatRoomMediator(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeUser, setCodeUser] = useState("");
  useEffect(() => {
    fetch(User)
      .then((response) => response.text())
      .then((data) => {
        setCodeUser(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeChatService, setCodeChatService] = useState("");
  useEffect(() => {
    fetch(ChatService)
      .then((response) => response.text())
      .then((data) => {
        setCodeChatService(data);
      })
      .catch((error) => {
        console.error("Error cargando el archivo:", error);
      });
  }, []);

  const [CodeChatController, setCodeChatController] = useState("");
  useEffect(() => {
    fetch(ChatController)
      .then((response) => response.text())
      .then((data) => {
        setCodeChatController(data);
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
        /chat-app
         ├── domain/
         │     ├── ChatMediator.js
         │     ├── ChatRoomMediator.js
         │     └── User.js
         ├── application/
         │     └── ChatService.js
         ├── infrastructure/
         │     └── ChatController.js
         └── server.js
        `}
      </pre>

      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        domain/ChatMediator.js
      </pre>
      <CodeEditor initialCode={CodeChatMediator} />
      
      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        domain/ChatRoomMediator.js
      </pre>
      <CodeEditor initialCode={CodeChatRoomMediator} />

      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        domain/User.js
      </pre>
      <CodeEditor initialCode={CodeUser} />

      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        application/ChatService.js
      </pre>
      <CodeEditor initialCode={CodeChatService} />

      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        infrastructure/ChatController.js
      </pre>
      <CodeEditor initialCode={CodeChatController} />

      <pre style={{ textAlign: "left", fontWeight: "bold", fontSize: "18px" }}>
        server.js
      </pre>
      <CodeEditor initialCode={CodeServer} />
    </div>
  );  
}


const Card6 = () => {

  const [jsonInput, setJsonInput] = useState(`
  {
  "username": "Sergio",
  "message": "Hola equipo!"
  }
  `);

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponseData(null);

    try {
      // Convertimos el texto a objeto JSON
      const parsedJson = JSON.parse(jsonInput);

      const response = await fetch(
        "https://actividaduno-be.vercel.app/api/chat/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedJson),
        },
      );

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