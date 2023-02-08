using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ejemplo1.Models;

namespace Ejemplo1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly EmpleadosContext _dbcontext;

        public EmpleadoController(EmpleadosContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("ObtenerUsuario")]

        public IActionResult ObtenerUsuario()
        {
            List<User> lista = _dbcontext.Users.ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }
    }
}
