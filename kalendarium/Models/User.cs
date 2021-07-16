using Dapper.Contrib.Extensions;

namespace kalendarium.Models
{
    [Table("User")]
    public class User
    {
        [Key]
        public int id { get; set; }

        public string firstName { get; set; }
        public string lastName { get; set; }
        public string emailAddress { get; set; }
        public string department { get; set; }
        public string password { get; set; }
    }
}