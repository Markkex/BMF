using backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Context
{
    public class BmfContext : DbContext
    {
        public BmfContext() : base()
        {

        }

        public DbSet<Bank> Banks { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Entity> Entities { get; set; }
        public DbSet<HouseType> HouseTypes { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Process> Processes { get; set; }
    }
}
