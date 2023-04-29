import React from "react";
import "../estilos/contador.css";
function Contador ({numclics}) {
    return(
        <div
        className="contador">
         {   numclics}
        </div>
    );
}
export default Contador;