using Microsoft.EntityFrameworkCore;
using mydetails.Models;

namespace mydetails.Data
{
    public class AppDbContext :DbContext
    {   
        //constractor
        public AppDbContext(DbContextOptions options) : base(options) 
        {

        }

        //personal details structure
        public DbSet<PersonalDetails> PersonalDetails { get; set; }
    }
}
