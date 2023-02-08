using System;
using System.Collections.Generic;

namespace Ejemplo1.Models;

public partial class User
{
    public int IdUser { get; set; }

    public string NombreEmpleado { get; set; } = null!;

    public string CorreoEmpleado { get; set; } = null!;

    public string DireccionEmpleado { get; set; } = null!;

    public int? TelefonoEmpleado { get; set; }
}
