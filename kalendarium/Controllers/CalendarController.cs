using kalendarium.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace kalendarium.Controllers
{
    [Route("calendar")]
    [ApiController]
    public class CalendarController : ControllerBase
    {
        /*        [HttpGet("{start}/{end}")]
                public List<Calendar> GetTheCalendar (DateTime start, DateTime end)
                {
                    return DAL.GetMFCalendar(start, end);
                }*/

        [HttpGet("fetchCal")]
        public List<Calendar> GetTheCalendar()
        {
            return DAL.GetMFCalendar();
        }
    }
}