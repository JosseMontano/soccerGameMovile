using System;
using System.Collections.Generic;

namespace server.Model;

public partial class Usuariopartido
{
    public Guid UsuarioPartidoId { get; set; }

    public Guid? UsuarioId { get; set; }

    public Guid? PartidoId { get; set; }

    public virtual Partido? Partido { get; set; }

    public virtual Usuario? Usuario { get; set; }
}

public class UsuariopartidoDTO
{


    public Guid? UsuarioId { get; set; }

    public Guid? PartidoId { get; set; }

}
