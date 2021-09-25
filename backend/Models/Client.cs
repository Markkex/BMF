using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string NIF { get; set; }

        
        public ICollection<Process> Processes { get; set; }
    }
}
