using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Model;

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
            var soccergames = _db.Partidos;
            return Ok(new { Message = "Datos obtenidos con exito", Data = soccergames, Status = 200 });
        }

        [HttpPost]
        public IActionResult Post([FromBody] PartidoDTO req)
        {
         

            var soccerGame = new Partido
            {
                Nombre = req.Nombre,
                Direccion = req.Direccion,
                Estado = req.Estado
            };

            _db.Empresas.Add(company);
            _db.SaveChanges();

            return Ok(new { Message = "Se creo la empresa", Data = company, Status = 201 });
        }


    }
}
