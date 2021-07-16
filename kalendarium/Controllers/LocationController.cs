using kalendarium.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace kalendarium.Controllers
{
    [Route("location")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        [HttpPost("add")]
        public Location AddLocation([FromForm] string ccity, [FromForm] string sstate, [FromForm] string sstreet, [FromForm] string zzip)
        {
            Location aLocation = new Location() { city = ccity, state = sstate, street = sstreet, zip = zzip };
            DAL.AddLocation(aLocation);
            return aLocation;
        }

        [HttpGet("by/{id}")]
        public Location GetLocationByID(int id)
        {
            Location thisLocale = DAL.ReadOneLocByID(id);
            return thisLocale;
        }

        [HttpPut("update/{Lid}/{Lcity}/{Lstate}/{Lstreet}/{Lzip}")]
        public bool UpdateLocation(int Lid, string Lcity, string Lstate, string Lstreet, string Lzip)
        {
            Location toUpdate = new Location() { id = Lid, city = Lcity, state = Lstate, street = Lstate, zip = Lzip };
            DAL.EditLocation(toUpdate);
            return true;
        }

        [HttpDelete("remove/{id}")]
        public bool DeleteLocation(int id)
        {
            DAL.DeleteLocation(id);
            return true;
        }

        [HttpGet("withevent")]
        public List<Join> GetAllEventsWithLocation()
        {
            return DAL.GetAllEventsWithLocation();
        }
    }
}