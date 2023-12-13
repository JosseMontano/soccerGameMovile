using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using server.Model;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoccerGameController : ControllerBase
    {
        private DBContext _db;
        public SoccerGameController(DBContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var soccergames = _db.Partidos.Join(_db.Usuarios,
                game => game.UsuarioId,
                user => user.UsuarioId,
                (game, user)=> new
                {
                    PartidoId= game.PartidoId,
                    MaximoJugadores = game.MaximoJugadores,
                    TipoCancha = game.TipoCancha,
                    Fecha = game.Fecha,
                    Hora = game.Hora,
                    UsuarioId = game.UsuarioId,
                    NombreUsuario = user.NombreUsuario,
                }
                );
            return Ok(new { Message = "Datos obtenidos con exito", Data = soccergames, Status = 200 });
        }

        [HttpGet("{id}")]
       // [Route("GamesByUser")]
        public IActionResult GetGamesByUser(Guid id)
        {
            var soccergames = _db.Partidos.Where(v => v.UsuarioId == id).Join(_db.Usuarios,
            game => game.UsuarioId,
            user => user.UsuarioId,
            (game, user) => new
            {
                PartidoId = game.PartidoId,
                MaximoJugadores = game.MaximoJugadores,
                TipoCancha = game.TipoCancha,
                Fecha = game.Fecha,
                Hora = game.Hora,
                UsuarioId = game.UsuarioId,
                NombreUsuario = user.NombreUsuario,
            }
            );


            return Ok(new { Message = "Datos obtenidos con exito", Data = soccergames, Status = 200 });
        }


        [HttpPost]
        public IActionResult Post([FromBody] PartidoDTO req)
        {
            var soccerGame = new Partido
            {
                MaximoJugadores = req.MaximoJugadores,
                TipoCancha = req.TipoCancha,
                Fecha = req.Fecha,
                Hora = req.Hora,
                UsuarioId= req.UsuarioId,
            };

            _db.Partidos.Add(soccerGame);
            _db.SaveChanges();

            return Ok(new { Message = "Se creo el partido", Data = soccerGame, Status = 201 });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var game = _db.Partidos.Find(id);
            if (game == null)
            {
                return NotFound(new { Message = "No se encontro el partido", Data = ' ', Status = 404 });
            }

            _db.Partidos.Remove(game);
            _db.SaveChanges();

            return Ok(new { Message = "Se elimino el partido", Data = ' ', Status = 200 });
        }
    }
}
