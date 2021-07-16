using Dapper.Contrib.Extensions;

namespace kalendarium.Models
{
    [Table("Coworker")]
    public class Coworker
    {
        [Key]
        public int id { get; set; }

        public bool hide { get; set; }

        public int user_id { get; set; }

        public int coworker_id { get; set; }
    }
}