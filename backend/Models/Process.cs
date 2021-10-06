using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Process
    {
        [Key]
        public int ProcessId { get; set; }

        public int VRef { get; set; }

        [StringLength(150)]
        public string AppraiserName { get; set; }

        public byte VisitInterior { get; set; }

        public int BankId { get; set; }
        public int EntityId { get; set; }
        public int HouseTypeId { get; set; }

        
        public virtual Entity Entity { get; set; }

        
        public virtual HouseType HouseType { get; set; }

        
        public virtual Bank Bank { get; set; }

        public Client Client { get; set; }

        public Location Location { get; set; }
    }
}
