using Dapper.Contrib.Extensions;
using System;

namespace kalendarium.Models
{
    // Might need Table[]??
    public class Join
    {
        [Key]
        public int id { get; set; }

        public int user_id { get; set; }
        public string name { get; set; }
        public bool privateEvent { get; set; }
        public DateTime dt_id { get; set; }
        public int location_id { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string street { get; set; }
        public string zip { get; set; }
    }
}