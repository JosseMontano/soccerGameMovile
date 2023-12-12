using System;
using System.Collections.Generic;

namespace server.Model;

public partial class Usuario
{
    public Guid UsuarioId { get; set; }

    public string NombreUsuario { get; set; } = null!;

    public string Contrasenia { get; set; } = null!;

    public virtual ICollection<Partido> Partidos { get; set; } = new List<Partido>();
}

public class LoginDTO
{

    public string NombreUsuario { get; set; } = null!;

    public string Contrasenia { get; set; } = null!;

}
