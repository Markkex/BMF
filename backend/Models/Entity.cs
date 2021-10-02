using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Entity
    {
        [Key]
        public int EntityId { get; set; }

        [Required]
        [StringLength(250)]
        public string EntityName { get; set; }

        [StringLength(250)]
        public string SubEntity { get; set; }

        public virtual Process Process { get; set; }
    }
}
