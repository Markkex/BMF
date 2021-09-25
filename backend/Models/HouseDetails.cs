using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class HouseDetails
    {
        [Key]
        public int Id { get; set; }
        public string District { get; set; }
        public string County { get; set; }
        public string Parish { get; set; }
        public string Address { get; set; }
        public string ZipCode { get; set; }
        public string HouseType { get; set; }

        public string Latitude { get; set; }
        public string Longitude { get; set; }

        public ICollection<Process> Processes { get; set; }
    }
}
