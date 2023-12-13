
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace server.Model;

public partial class DBContext : DbContext
{
    public DBContext()
    {
    }

    public DBContext(DbContextOptions<DBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Partido> Partidos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    public virtual DbSet<Usuariopartido> Usuariopartidos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresExtension("uuid-ossp");

        modelBuilder.Entity<Partido>(entity =>
        {
            entity.HasKey(e => e.PartidoId).HasName("partidos_pkey");

            entity.ToTable("partidos");

            entity.Property(e => e.PartidoId)
                .HasDefaultValueSql("uuid_generate_v4()")
                .HasColumnName("partido_id");
            entity.Property(e => e.Fecha).HasColumnName("fecha");
            entity.Property(e => e.Hora).HasColumnName("hora");
            entity.Property(e => e.MaximoJugadores).HasColumnName("maximo_jugadores");
            entity.Property(e => e.TipoCancha)
                .HasMaxLength(255)
                .HasColumnName("tipo_cancha");
            entity.Property(e => e.UsuarioId).HasColumnName("usuario_id");

            entity.HasOne(d => d.Usuario).WithMany(p => p.Partidos)
                .HasForeignKey(d => d.UsuarioId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("partidos_usuario_id_fkey");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioId).HasName("usuario_pkey");

            entity.ToTable("usuario");

            entity.Property(e => e.UsuarioId)
                .HasDefaultValueSql("uuid_generate_v4()")
                .HasColumnName("usuario_id");
            entity.Property(e => e.Contrasenia)
                .HasMaxLength(255)
                .HasColumnName("contrasenia");
            entity.Property(e => e.NombreUsuario)
                .HasMaxLength(255)
                .HasColumnName("nombre_usuario");
        });

        modelBuilder.Entity<Usuariopartido>(entity =>
        {
            entity.HasKey(e => e.UsuarioPartidoId).HasName("usuariopartido_pkey");

            entity.ToTable("usuariopartido");

            entity.Property(e => e.UsuarioPartidoId)
                .HasDefaultValueSql("uuid_generate_v4()")
                .HasColumnName("usuario_partido_id");
            entity.Property(e => e.PartidoId).HasColumnName("partido_id");
            entity.Property(e => e.UsuarioId).HasColumnName("usuario_id");

            entity.HasOne(d => d.Partido).WithMany(p => p.Usuariopartidos)
                .HasForeignKey(d => d.PartidoId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("usuariopartido_partido_id_fkey");

            entity.HasOne(d => d.Usuario).WithMany(p => p.Usuariopartidos)
                .HasForeignKey(d => d.UsuarioId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("usuariopartido_usuario_id_fkey");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
