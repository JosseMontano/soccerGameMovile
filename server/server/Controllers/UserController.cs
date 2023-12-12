using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Model;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private DBContext _db;
        public UserController(DBContext db)
        {
            _db = db;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var users = _db.Usuarios;
            return Ok(new { Message = "Datos obtenidos con exito", Data = users, Status = 200 });
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult Register([FromBody] LoginDTO req)
        {
            var exists = _db.Usuarios.Any(e => e.NombreUsuario == req.NombreUsuario);
            if (exists)
            {
                return BadRequest(new { Message = "Ya existe este usuario", Data = ' ', Status = 400 });
            }

            var user = new Usuario
            {
                NombreUsuario = req.NombreUsuario,
                Contrasenia = req.Contrasenia,
            };

            _db.Usuarios.Add(user);
            _db.SaveChanges();

            return Ok(new { Message = "Se registro el usario", Data = user, Status = 201 });
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody] LoginDTO req)
        {
            var user = _db.Usuarios.FirstOrDefault(e => e.NombreUsuario == req.NombreUsuario);
            if (user != null)
            {
           
         if(user.Contrasenia == req.Contrasenia)
                {
                    return Ok(new { Message = "Inicio sesion con exito", Data = user, Status = 200 });
                }

            return BadRequest(new { Message = "Las contraseñas no coinciden", Data = ' ', Status = 201 });

            }

            return NotFound(new { Message = "No existe este usuario", Data = ' ', Status = 404 });
        }
    }
}
