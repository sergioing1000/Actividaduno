import React, { useState } from "react";

import CardCarousel from "./cardcarouselsc1.jsx";
import CardCarouse2 from "./cardcarouselsc2.jsx";
import CardCarouse3 from "./cardcarouselsc3.jsx";

const Sce1 = () => {
  return <div>
        <CardCarousel/>
  </div>;
};

const Sce2 = () => {
  return <div>
        <CardCarouse2/>
  </div>;
}

const Sce3 = () => {
    return (
      <div>
        <CardCarouse3 />
      </div>
    );
};

const strategies = {
  sce1: () => <Sce1 />,
  sce2: () => <Sce2 />,
  sce3: () => <Sce3 />,
};



const SelectorEscenarios = () => {
  const [currentStrategy, setCurrentStrategy] = useState(null);

  const renderStrategy = () => {
    if (!currentStrategy) return null;

    const strategy = strategies[currentStrategy];

    return strategy ? strategy() : null;
  };

  const getButtonStyle = (strategyName) => ({
    backgroundColor: currentStrategy === strategyName ? "#119ef5" : "#e0e0e0",
    color: currentStrategy === strategyName ? "white" : "black",
    padding: "8px 16px",
    marginRight: "8px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  });

  return (
    <div>
      <h3>Seleccione el Escenario</h3>

      <button
        style={getButtonStyle("sce1")}
        onClick={() => setCurrentStrategy("sce1")}
      >
        Escenario 1
      </button>

      <button
        style={getButtonStyle("sce2")}
        onClick={() => setCurrentStrategy("sce2")}
      >
        Escenario 2
      </button>

      <button
        style={getButtonStyle("sce3")}
        onClick={() => setCurrentStrategy("sce3")}
      >
        Escenario 3
      </button>

      <hr />

      {renderStrategy()}
    </div>
  );
};

export default SelectorEscenarios;
