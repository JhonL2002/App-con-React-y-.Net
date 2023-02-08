import { useEffect, useState } from "react";

const Efecto = () => {

    const [nombre, setNombre] = useState("Pedro")

    const EscribirEnConsola = () => {
        setNombre("Juanito")
        console.log("1. El nombre ha cambiado : "+ nombre)
    }

    useEffect(() => {
        console.log("2. El nombre ha cambiado : " + nombre)
    }, [nombre])
    /* Se usa cuando obtenemos recursos por primera vez al iniciar el sitio web */
    useEffect(() => {
        console.log("La aplicación ha iniciado")
    }, [])

    return (
        <div className="container-fluid">
            <h1>El nombre actual es:{nombre}</h1>
            <button onClick={EscribirEnConsola}>Cambiar Nombre</button>
        </div>
    )

}
export default Efecto;