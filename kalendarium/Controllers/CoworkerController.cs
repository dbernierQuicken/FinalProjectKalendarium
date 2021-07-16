using kalendarium.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace kalendarium.Controllers
{
    [Route("coworker")]
    [ApiController]
    public class CoworkerController : ControllerBase
    {
        [HttpPost("add")]
        public bool AddCoworker(bool toHide, int thisUser, int coworkerID)
        {
            DAL.AddCoworker(toHide, thisUser, coworkerID);
            return true;
        }

        [HttpGet("getcoworkerbyuser")]
        public List<Coworker> GetCoworkerByUser(int thisUser)
        {
            return DAL.GetCoworkerByUser(thisUser);
        }

        [HttpGet("toggle")]
        public bool ToggleHide(int userid, int coworkerid)
        {
            DAL.ToggleHide(userid, coworkerid);
            return true;
        }
    }
}