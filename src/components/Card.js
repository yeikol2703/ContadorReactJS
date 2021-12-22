import React, { useState } from "react";

export const Card = (props) => {
  const [valor, setValor] = useState(0);
  //Funciones arrow function
  const sumar = () => setValor(valor + 1);
  const restar = () => valor <= 0 ? setValor(0) : setValor(valor - 1);//esta validado que no reste -vos

  //estilos css
  const buttonStyle = {
    width: "200px",
    margin:"1rem",
  };

  const contadorStyle = {
    fontSize:"100px",
    color:"white",
  }
  const containerStyle ={
    backgroundImage: "url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif)",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="card text-center" style={containerStyle}>
        <h2>Contador</h2>
        <h3 style={contadorStyle} >{valor}</h3>
        <nav >
          <button style={buttonStyle} onClick={sumar} className="btn btn-success">
            +
          </button>
          <button style={buttonStyle} onClick={restar} className="btn btn-danger">
            -
          </button>
        </nav>
      </div>
    </>
  );
};

Card.defaultProps = {
  name: "default",
  texto: "default",
  enlace: "http://localhost:3000/",
};
