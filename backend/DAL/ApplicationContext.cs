using backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DAL
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext() : base("BMFContext") { }

        public DbSet<Process> Processes { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<HouseDetails> HouseDetails { get; set; }
    }
}
