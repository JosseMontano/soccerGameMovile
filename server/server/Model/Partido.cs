using System;
using System.Collections.Generic;

namespace server.Model;

public partial class Partido
{
    public Guid PartidoId { get; set; }

    public int MaximoJugadores { get; set; }

    public string TipoCancha { get; set; } = null!;

    public DateOnly Fecha { get; set; }

    public TimeOnly Hora { get; set; }

    public Guid? UsuarioId { get; set; }

    public virtual Usuario? Usuario { get; set; }

    public virtual ICollection<Usuariopartido> Usuariopartidos { get; set; } = new List<Usuariopartido>();
}

public partial class PartidoDTO
{

    public int MaximoJugadores { get; set; }

    public string TipoCancha { get; set; } = null!;

    public DateOnly Fecha { get; set; }

    public TimeOnly Hora { get; set; }

    public Guid? UsuarioId { get; set; }

}