import React, { useState, useEffect } from "react";

import "./CardCarousel.css";

import Imgbuilder from "../assets/images/builder.png";
import Casas from "../assets/images/casas.png";
import Diagram from "../assets/images/diagram.jpg";
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
    <h3>Patrón escogido - Escenario 1</h3>

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

    <hr />

    <div className="card-image">
      <img src={Casas} alt="builder/image" width={550} />
      <span className="card-hiden-text">
        Imagen tomada de{" "}
        <a href="https://refactoring.guru/" target="_blank">
          {" "}
          https://refactoring.guru/
        </a>
      </span>
    </div>
    <span className="card-text-4">
      Por ejemplo, pensemos en cómo crear un objeto Casa. Para construir una
      casa sencilla, debemos construir cuatro paredes y un piso, así como
      instalar una puerta, colocar un par de ventanas y ponerle un tejado. Pero
      ¿qué pasa si quieres una casa más grande y luminosa, con un jardín y otros
      extras (como sistema de calefacción, instalación de fontanería y cableado
      eléctrico)?
    </span>

    <hr />

    <span>
      Para el caso de la actividad en el escenario 1, se pensó en cómo crear un
      objeto Automóvil. Para construir una automóvil sencillo, debemos
      construirlo con lo básico, que es el motor, este es el elemento común en
      todos los automóviles que se pueden crear, pues al menos se debe contar
      con un motor de cualquier tipo para la creación de un nuevo automóvil. Se
      creó una clase constructora AutomovilBuilder y para cada una de las
      representaciones de los vehículos y se implementó los pasos de
      construcción. Se implementó un método para extraer el resultado de la
      construcción.
    </span>

    <span></span>
  </div>
);
const Card3 = () => (
  <div className="card-content">
    <h3>Justificación</h3>

    <span className="card-text-4">
      Permite construir objetos complejos paso a paso. Este patrón nos permite
      producir distintos tipos y representaciones de un objeto empleando el
      mismo código de construcción. (Builder)
    </span>
    <hr />
    <h3>Ventajas </h3>
    <span className="card-text-4">
      <ul>
        <li>
          Se puede construir objetos (vehículos) paso a paso, aplazar pasos de
          la construcción o ejecutar pasos de forma recursiva.
        </li>
        <br />
        <li>
          Se puede reutilizar el mismo código de construcción al construir
          varias representaciones de productos (vehículos).
        </li>
        <br />
        <li>
          Se aplica el Principio de responsabilidad única. Se puede aislar un
          código de construcción complejo de la lógica de negocio del producto.
        </li>
      </ul>
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
        │ ├── automovil.js
        <br />│ └── automovilBuilder.js
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
};
const Card6 = () => {
  const [formData, setFormData] = useState({
    motor: "",
    color: "",
    llantas: "",
    sistemaSonido: "",
    interiores: "",
    techoSolar: false,
    gps: false,
  });

  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const RespuestaServidor = ({ data, error, loading }) => {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          minWidth: "300px",
        }}
      >
        <h3>Respuesta del Servidor - JSON</h3>

        {loading && <p>Cargando...</p>}

        {error && (
          <div style={{ color: "red", fontWeight: "bold" }}>
            ❌ Error: {error}
          </div>
        )}

        {data && (
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        {!loading && !data && !error && <p>Loading...</p>}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(JSON.stringify(formData));

    setLoading(true);
    setError(null);
    setResponseData(null);

    try {
      const response = await fetch("https://actividaduno-be.vercel.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;

      data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error en el servidor");
      }

      setTimeout(() => {
        setResponseData(data);
      }, 1000);
    } catch (err) {
      setError(err.message);
      setMensaje(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Constructor de Vehículo</h2>

        <pre>Precio Base $20.000</pre>
        <hr />
        <div>
          <label>Tipo de Motor: </label>
          <select name="motor" value={formData.motor} onChange={handleChange}>
            <option value="">Seleccione el tipo de motor</option>
            <option value="V6">V6 + $6.000</option>
            <option value="V8">V8 + $8.000</option>
            <option value="4 en Linea">4 en Linea + $4.500</option>
            <option value="6 en Linea">6 en Linea + $5.000</option>
            <option value="electrico">Electrico + $8.500</option>
          </select>
        </div>
        <hr />
        <div>
          <label>Color del vehículo: </label>
          <select name="color" value={formData.color} onChange={handleChange}>
            <option value="">Seleccione un color</option>
            <option value="rojo">Rojo + $500.oo</option>
            <option value="azul">Azul + $500.oo</option>
            <option value="verde">Verde + $500.oo</option>
            <option value="amarillo">Amarillo + $500.oo</option>
            <option value="naranja">Naranja + $500.oo</option>
            <option value="morado">Morado + $500.oo</option>
            <option value="rosado">Rosado + $500.oo</option>
            <option value="negro">Negro + $500.oo</option>
            <option value="dorado">Blanco + $550.oo</option>
            <option value="gris">Gris + $550.oo</option>
          </select>
        </div>
        <hr />
        <div>
          <label>Tipo de llantas: </label>
          <select
            name="llantas"
            value={formData.llantas}
            onChange={handleChange}
          >
            <option value="">Seleccione tipo de llantas</option>
            <option value="AllSeason">All-Season- Todo el año + $650.oo</option>
            <option value="Todo Terreno">Todo Terreno + $1100.oo</option>
            <option value="Deportivas">Deportivas + $1800.oo</option>
          </select>
        </div>
        <hr />
        <div>
          <label>Equipo de Sonido : </label>
          <select
            name="sistemaSonido"
            value={formData.sistemaSonido}
            onChange={handleChange}
          >
            <option value="">Seleccione marca de equipo de sonido</option>
            <option value="Bose">Bose + $900.oo</option>
            <option value="Harman Kardon">Harman Kardon + $1100.oo</option>
            <option value="JBL">JBL + $850.oo</option>
            <option value="Alpine">Alpine + $800.oo</option>
            <option value="Kenwood">Kenwood + $600.oo</option>
            <option value="Pioneer">Pioneer + $700.oo</option>
            <option value="Infinity">Infinity + $500.oo</option>
          </select>
        </div>
        <hr />
        <div>
          <label>Interiores</label>
          <select
            name="interiores"
            value={formData.interiores}
            onChange={handleChange}
          >
            <option value="">Seleccione el acabo interior</option>
            <option value="Cuero">Cuero + $1800.oo</option>
            <option value="Tela de lujo">Tela de lujo + $900.oo</option>
            <option value="Gamuza">Gamuza + $1200.oo</option>
            <option value="Alcantara">Alcantara + $1500.oo</option>
          </select>
        </div>
        <hr />
        <div>
          <label>
            <input
              type="checkbox"
              name="techoSolar"
              checked={formData.techoSolar}
              onChange={handleChange}
            />
            Techo Solar + $2000.oo
          </label>
        </div>
        <hr />
        <div>
          <label>
            <input
              type="checkbox"
              name="gps"
              checked={formData.gps}
              onChange={handleChange}
            />
            Navegacion con GPS + $660.oo
          </label>
        </div>
        <hr />
        <button type="submit">Enviar</button>

        {mensaje && <p>{mensaje}</p>}
      </form>

      <div style={{ minWidth: "500px" }}>
        <RespuestaServidor
          data={responseData}
          error={error}
          loading={loading}
        />
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
