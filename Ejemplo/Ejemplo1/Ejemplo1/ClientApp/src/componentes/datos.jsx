import { useEffect, useState } from "react";

const Data = () => {

    const [users, setUser] = useState([]);

    const ConsumirApi = async () => {
        const response = await fetch("api/empleado/ObtenerUsuario");

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setUser(data)
        }
    }

    useEffect(() => {
        ConsumirApi();
    },[])

    return (
        <div className="container">
            <h5>Lista de Usuarios</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => (
                            <tr key={ item.idUser }>
                                <td>{ item.nombreEmpleado }</td>
                                <td>{ item.correoEmpleado }</td>
                                <td>{ item.direccionEmpleado }</td>
                                <td>{ item.telefonoEmpleado }</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            
        </div>
    )

}
export default Data;