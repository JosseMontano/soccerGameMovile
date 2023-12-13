using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Model;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioPartidoController : ControllerBase
    {
        private DBContext _db;
        public UsuarioPartidoController(DBContext db)
        {
            _db = db;
        }

        [HttpGet("{id}")]
        // [Route("GamesByUser")]
        public IActionResult Get(Guid id)
        {
           
            var usersGame = _db.Usuariopartidos.Where(v => v.PartidoId == id)
                .Join(_db.Partidos,
            usergame => usergame.PartidoId,
            game => game.PartidoId,
            (usergame, game) => new
            {
                PartidoId = game.PartidoId,
                MaximoJugadores = game.MaximoJugadores,
                TipoCancha = game.TipoCancha,
                Fecha = game.Fecha,
                Hora = game.Hora,
                UsuarioId = game.UsuarioId,
            }
            ).First();

            var players = _db.Usuariopartidos.Where(v => v.PartidoId == id)
                .Join(_db.Usuarios,
            usergame => usergame.UsuarioId,
            player => player.UsuarioId,
            (usergame, player) => new
            {
                NombreJugador= player.NombreUsuario
            }
            );

            return Ok(new { Message = "Datos obtenidos con exito", Data = new { Game= usersGame, Players= players  } , Status = 200 });
        }

        [HttpPost("Inscribirse")]
        public IActionResult Post([FromBody] UsuariopartidoDTO req)
        {

            var getInfoGame = _db.Partidos
                .Where(v => v.PartidoId == req.PartidoId).FirstOrDefault();

            var usersGame = _db.Usuariopartidos
                .Where(v => v.PartidoId == req.PartidoId).Count();

            if(getInfoGame?.MaximoJugadores == usersGame)
            {
                return BadRequest(new { Message = "Ya hay una cantidad maxima de jugadores", Data = ' ', Status = 400 });
            }


            var userGame = new Usuariopartido
            {
                PartidoId = req.PartidoId,
                UsuarioId = req.UsuarioId,
            };

            _db.Usuariopartidos.Add(userGame);
            _db.SaveChanges();

            return Ok(new { Message = "Se registro al juego", Data = userGame, Status = 201 });
        }

        [HttpPost]
        [Route("Desinscribirse")]
        public IActionResult Delete([FromBody] UsuariopartidoDTO req)
        {
            var playersgame = _db.Usuariopartidos
                .Where(v => v.PartidoId == req.PartidoId && v.UsuarioId == req.UsuarioId)
                .First();


           if (playersgame == null)
            {
                return NotFound(new { Message = "No se encontro el partido", Data = ' ', Status = 404 });
            
            }

            _db.Usuariopartidos.Remove(playersgame);
            _db.SaveChanges();

            return Ok(new { Message = "Ya no forma parte del partido", Data = playersgame, Status = 200 });
        }
    }
}
