import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Efecto from './componentes/useEffect';
import Data from './componentes/datos';



const App = () => {

    const [numero, setNumero] = useState(0)


    /*
    numero=nombre de la variable para obtener el valor/estado actual
    setNumero=función que actualiza el valor o estado
    */

    let modelopersona = {
        Nombre: "Jhon",
        Correo: "jhon@gmail.com"

    }
    const [persona, setPersona] = useState(modelopersona)

    return (
        <div className="container-fluid">
            <h1>valor actual del numero:{numero}</h1>
            <button onClick={() => setNumero(numero + 1)}>Sumar +1</button>
            <br></br>
            <br></br>
            <br></br>
            <p>Nombre: {persona.Nombre}</p>
            <p>Correo: {persona.Correo}</p>
            <button onClick={() => setPersona(
                /*Devuelve la información actual que tiene el modelo */
                {
                    ...persona,
                    Correo: "jhoncillo@gmail.com"

                }
            )}
            >Cambiar correo</button>
            <br></br>
            <br></br>
            <br></br>
            <Efecto></Efecto>
            <Data></Data>
        </div>

     )
}

export default App;
