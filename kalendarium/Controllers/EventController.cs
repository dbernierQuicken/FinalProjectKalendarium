using kalendarium.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace kalendarium.Controllers
{
    [Route("event")]
    [ApiController]
    public class EventController : ControllerBase
    {
        [HttpPost("addevent")]
        public Event MakeNewEvent([FromForm] int userID, [FromForm] string eventName, [FromForm] bool isPrivate, [FromForm] DateTime dateID)
        {
            return DAL.MakeNewEvent(userID, eventName, isPrivate, dateID);
        }

        [HttpGet("getevent/{eventId}")]
        public Event ReadOneEventByID(int eventID)
        {
            return DAL.ReadOneEventByID(eventID);
        }

        [HttpGet("public")]
        public List<Event> ReadAllPublicEvents()
        {
            return DAL.ReadAllPublicEvents();
        }

        [HttpGet("readcoworker")]
        public List<Event> ReadAllCoworkerPublicEvents(int coworkerID)
        {
            return DAL.ReadAllCoworkerPublicEvents(coworkerID).ToList();
        }

        [HttpGet("byday/{date}/{user_id}")]
        public List<JoinCalEventLocationbyDay> EventsByDay(string date, int user_id)
        {
            return DAL.EventsByDay(date, user_id).ToList();
        }

        [HttpGet("today/{user_id}")]
        public List<JoinCalEventLocationbyDay> EventsForToday(int user_id)
        {
            string date = DateTime.Now.ToString("yyyy-MM-dd");
            return DAL.EventsByDay(date, user_id).ToList();
        }

        [HttpGet("byuser")]
        public List<Event> ReadAllEventsByUser(int userID)
        {
            return DAL.ReadAllEventsByUser(userID).ToList();
        }

        [HttpPost("update")]
        public Event UpdateEvent([FromForm] int eventid, [FromForm] int uid, [FromForm] string eventname, [FromForm] bool isPrivate, [FromForm] int locID, [FromForm] DateTime date)
        {
            Event toUpdate = new Event() { id = eventid, name = eventname, privateEvent = isPrivate, location_id = locID, user_id = uid, dt_id = date };
            DAL.UpdateEvent(toUpdate);
            return toUpdate;
        }

        [HttpDelete("remove/{eventId}")]
        public bool DeleteEvent(int eventID)
        {
            DAL.DeleteEvent(eventID);
            return true;
        }

        [HttpGet("GetAllwithEventandUser")]
        public List<JoinEventUserLocation> GetAllEventsWithLocationAndUser()
        {
            return DAL.GetAllEventsWithLocationAndUser();
        }

        [HttpGet("GetOneEventDetail/{eventID}")]
        public List<JoinEventUserLocation> GetOneEventsWithLocationAndUser(int eventID)
        {
            return DAL.GetOneEventsWithLocationAndUser(eventID);
        }
    }
}

/* [HttpGet]
       public async Task<string> GetAll()
       {
           HttpClient client = new HttpClient();
           client.BaseAddress = new Uri("https://grandcircusco.github.io");
           var response = await client.GetAsync("/demo-apis/donuts.json");
           string json = await response.Content.ReadAsStringAsync();
           return json;
       }

       // Get Specific Donut
       // Our route: GET localhost:12345/donut/3
       //https://grandcircusco.github.io/demo-apis/donuts/2.json
       [HttpGet("{id}")]
       public async Task<string> GetOne(int id)
       {
           HttpClient client = new HttpClient();
           client.BaseAddress = new Uri("https://grandcircusco.github.io");
           var response = await client.GetAsync($"/demo-apis/donuts/{id}.json");
           string json = await response.Content.ReadAsStringAsync();
           return json;
       }

       */