using Microsoft.EntityFrameworkCore;
using server.Model;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

//add Postgres

// Add services to the container.

builder.Services.AddDbContext<DBContext>(option => option.UseNpgsql(builder.Configuration.GetConnectionString("connection")));

//fix do whiles
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
