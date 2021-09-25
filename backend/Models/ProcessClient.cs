using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class ProcessClient
    {
        public IEnumerable<Process> Processes { get; set; }
        public IEnumerable<Client> Clients { get; set; }
    }
}
