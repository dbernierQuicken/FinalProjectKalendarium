using Dapper;
using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace kalendarium.Models
{
    public class DAL
    {
        static public IDbConnection db;

        // Department methods
        // C - Add Event
        // R: Read All, Read one by ID
        // U -- Update Location / Event ID?
        // D -- Delete

        //-----------------------------------------------------------------------------
        //--------------------USER CRUD-----------------------------------------------
        //-----------------------------------------------------------------------------

        public static User AddUser(string fName, string lName, string eAddress, string dPArt, string pWord)
        {
            User newuser = new User() { firstName = fName, lastName = lName, emailAddress = eAddress, department = dPArt, password = pWord };
            db.Insert(newuser);
            return newuser;
        }

        public static bool isUser(User usr)
        {
            List<User> userlist = new List<User>();

            userlist = db.GetAll<User>().ToList();

            foreach (User currentuser in userlist)
            {
                if (currentuser.emailAddress == usr.emailAddress)
                {
                    return true;
                }
            }
            return false;
        }

        public static List<User> GetOneUser(string eAddress)
        {
            return db.Query<User>("select * from user where emailAddress = @uEAddress", new { uEAddress = eAddress }).ToList();
        }

        public static List<User> GetAllUsers()
        {
            return db.GetAll<User>().ToList();
        }

        //-----------------------------------------------------------------------------
        //--------------------COWORKER CRUD-----------------------------------------------
        //-----------------------------------------------------------------------------
        public static Coworker AddCoworker(bool toHide, int thisUser, int coworkerID)
        {
            Coworker newCW = new Coworker() { hide = toHide, user_id = thisUser, coworker_id = coworkerID };
            db.Insert(newCW);
            return newCW;
        }

        public static List<Coworker> GetCoworkerByUser(int thisUser)
        {
            return db.Query<Coworker>("select * from coworker where user_id = @uTheUser", new { uTheUser = thisUser }).ToList();
        }

        public static bool ToggleHide(int thisUser, int thisCoworker)
        {
            List<Coworker> result = db.Query<Coworker>("select * from coworker where user_id = @uTheUser and coworker_id = @uTheCoworker",
                new { uTheUser = thisUser, uTheCoworker = thisCoworker }).ToList();

            foreach (Coworker cur in result)
            {
                if (cur.hide)
                {
                    cur.hide = false;
                }
                else
                {
                    cur.hide = true;
                }
                db.Update(cur);
            }
            return true;
        }

        //-----------------------------------------------------------------------------
        //--------------------EVENT CRUD-----------------------------------------------
        //-----------------------------------------------------------------------------
        public static Event MakeNewEvent(int userID, string eventName, bool isPrivate, DateTime dateID)
        {
            Event newEvent = new Event() { user_id = userID, name = eventName, privateEvent = isPrivate, dt_id = dateID };
            db.Insert(newEvent);
            return newEvent;
        }

        public static Event ReadOneEventByID(int eventID)
        {
            return db.Get<Event>(eventID);
        }

        public static List<Event> ReadAllPublicEvents()
        {
            return db.Query<Event>("select * from Event where privateEvent = false").ToList();
        }

        public static List<Event> ReadAllCoworkerPublicEvents(int coworkerID)
        {
            return db.Query<Event>("select * from Event where privateEvent = false and user_id = @uCWID", new { uCWID = coworkerID }).ToList();
        }

        public static List<Event> ReadAllEventsByUser(int userID)
        {
            return db.Query<Event>("select * from Event where user_id = @user", new { user = userID }).ToList();
        }

        public static Event UpdateEvent(Event toUpdate)
        {
            db.Update<Event>(toUpdate);
            return toUpdate;
        }

        public static bool DeleteEvent(int eventID)
        {
            Event toDelete = new Event() { id = eventID };
            db.Delete<Event>(toDelete);
            return true;
        }

        public static List<JoinCalEventLocationbyDay> EventsByDay(string date, int usrID)
        {
            return db.Query<JoinCalEventLocationbyDay>(" SELECT Calendar.*, event.*, location.city, location.state, location.street, location.zip FROM Calendar" +
                " Left JOIN event ON Calendar.dt=event.dt_id Left join location on event.location_id=location.id WHERE dt = @uDate and user_id = @uid", new { uDate = date, uid = usrID }).ToList();
        }

        //-----------------------------------------------------------------------------
        //--------------------CALENDAR CRUD-----------------------------------------------
        //-----------------------------------------------------------------------------

        /*        public static List<Calendar> GetMFCalendar(DateTime start, DateTime end)
        {
            return db.Query<Calendar>("select * from calendar where dt >= @uStart and dt <= @uEnd", new { uStart = start, uEnd = end }).ToList();
        }*/

        public static List<Calendar> GetMFCalendar()
        {
            return db.Query<Calendar>("select * from calendar where y = 2021").ToList();
        }

        //-----------------------------------------------------------------------------
        //--------------------LOCATION CRUD-----------------------------------------------
        //-----------------------------------------------------------------------------

        public static List<Join> GetAllEventsWithLocation()
        {
            return db.Query<Join>("SELECT event.*, location.city, location.state, location.street, location.zip FROM event Left JOIN location ON event.location_id=location.id where privateEvent = false").ToList();
        }
        public static bool AddLoctoEvent(int eventid, int locid)
        {
            db.Query<Event>($"update event set location_id = {locid} where id = {eventid}");
            return true;
        }
        public static Location AddLocation(Location aLocation)
        {
            
            db.Insert(aLocation);
            return aLocation;
        }

        public static Location ReadOneLocByID(int id)
        {
            return db.Get<Location>(id);
        }

        public static bool EditLocation(Location aLocation)
        {
            db.Update<Location>(aLocation);
            return true;
        }

        public static bool DeleteLocation(int LocID)
        {
            Location aLocation = new Location() { id = LocID };
            db.Delete(aLocation);
            return true;
        }

        public static List<JoinEventUserLocation> GetAllEventsWithLocationAndUser()
        {
            return db.Query<JoinEventUserLocation>("SELECT event.*, location.city, location.state, location.street, location.zip, user.firstName, user.lastName, user.emailAddress FROM event Left JOIN location ON event.location_id=location.id Left join user on event.user_id=user.id").ToList();
        }

        public static List<JoinEventUserLocation> GetOneEventsWithLocationAndUser(int eventID)
        {
            return db.Query<JoinEventUserLocation>("SELECT event.*, location.city, location.state, location.street, location.zip, user.firstName, user.lastName, user.emailAddress FROM event Left JOIN location ON event.location_id=location.id Left join user on event.user_id=user.id where event.id = @eventid", new { eventid = eventID }).ToList();
        }
    }
}