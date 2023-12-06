using Microsoft.EntityFrameworkCore;
using mydetails.Data;
using mydetails.MappingProfile;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
#region Database Cofig
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
#endregion

#region CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("CustomPolicy",x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
#endregion

#region Automapper Config
builder.Services.AddAutoMapper(typeof(AutoMapping));
#endregion

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CustomPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
