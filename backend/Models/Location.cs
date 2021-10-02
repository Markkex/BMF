using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Location
    {
        [Key]
        public int LocationId { get; set; }
        
        [StringLength(300)]
        public string Address { get; set; }
        
        [StringLength(50)]
        public string District { get; set; }
        
        [StringLength(150)]
        public string Parish { get; set; }
        
        [StringLength(300)]
        public string County { get; set; }
        
        [StringLength(15)]
        public string Latitude { get; set; }
        
        [StringLength(15)]
        public string Longitude { get; set; }
    }
}
