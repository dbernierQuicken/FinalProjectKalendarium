using Dapper.Contrib.Extensions;

namespace kalendarium.Models
{
    [Table("Location")]
    public class Location
    {
        [Key]
        public int id { get; set; }

        public string city { get; set; }
        public string state { get; set; }
        public string street { get; set; }
        public string zip { get; set; }
    }
}