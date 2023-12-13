using System;
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

   /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Server=localhost;Port=5932;Database=goalSoccer;User Id=postgres;Password=root;");
   */
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

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
