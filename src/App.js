import free from"./imagen/free.jpg";
import React from "react";
import "./App.css";
import Boton from "./componenetes/boton";
import "./estilos/boton.css";
import Contador from "./componenetes/contador";
import { useState } from "react";

function App() {

  const [ numclics , setNumClics ]= useState (0);

  const manejarClic =()=> {
   setNumClics(numclics + 1);
  }
  const reiniciarContador =()=> {
    setNumClics (0);
  }
  return(

    <div className="App">
      <div className="free-contenedor">  
      <img
      className="free"
      src={free}
      alt="Logo de freec."/>
      </div> 
      <div className="contenedor-principal">

        <Contador numclics={numclics}/>

        <Boton
        texto="clic"
        esBotonDeClic= {true}
        manejarClic= {manejarClic} />

         <Boton
        texto="reiniciar"
        esBotonDeClic= {false}
        manejarClic= {reiniciarContador} />
        </div> 
    </div>
  );
}

export default App;
