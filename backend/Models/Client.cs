using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Client
    {
        [Key]
        public int ClientId { get; set; }

        [Required]
        [StringLength(400)]
        public string ClientName { get; set; }

        [StringLength(15)]
        public string ClientContact { get; set; }
        
        [StringLength(20)]
        public string ClientNif { get; set; }

    }
}
