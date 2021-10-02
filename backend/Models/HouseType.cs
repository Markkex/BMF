using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class HouseType
    {
        [Key]
        public int HouseTypeId { get; set; }

        [Required]
        [StringLength(150)]
        public string HouseTypeName { get; set; }

        public virtual Process Process { get; set; }
    }
}
