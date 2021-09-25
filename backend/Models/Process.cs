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
        public int Id { get; set; }
        public int VRef { get; set; }
        public string Entity { get; set; }
        public string Appraiser { get; set; }
        public string BankName { get; set; }
        public DateTime DayCreation { get; set; }
        public DateTime DayReceiving { get; set; }
        public DateTime DayVisit { get; set; }
        public DateTime DayConcluded { get; set; }

        public HouseDetails HouseDetails { get; set; }
        public Client Client { get; set; }
    }
}
