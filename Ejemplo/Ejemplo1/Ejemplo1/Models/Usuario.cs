using System;
using System.Collections.Generic;

namespace Ejemplo1.Models;

public partial class Usuario
{
    public int IdEmpleado { get; set; }

    public string Nombre { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public string Direccion { get; set; } = null!;

    public int Telefono { get; set; }
}
