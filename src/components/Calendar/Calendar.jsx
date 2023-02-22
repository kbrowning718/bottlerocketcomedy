import "./Calendar.css";
import { useState } from "react";
import { useEffect } from "react";
import { eventBriteApiToken } from "../../consts.js";
import { event_id } from "../../consts.js";
import { eventbrite } from "../../api/eventbrite.js";
import { getDateString } from "../../helper.js";
import { organization_id } from "../../consts.js";
import Calendar from "react-calendar";
import { EventDetails } from "../../components";

const getEvents = async () => {
  const response = await eventbrite.get(
    `/organizations/${organization_id}/events/?token=${eventBriteApiToken}`
  );

  return response.data;
};

export const CalendarContainer = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState([]);

  useEffect(() => {
    setLoading(true);
    const data = getEvents().then((data) => {
      setEventData(data.events);
      setLoading(false);
    });
  }, []);

  const handleDayClick = (date) => {
    const filteredEvents = eventData.filter((item) => {
      const options = {
        day: "numeric",
        year: "numeric",
        month: "2-digit",
      };
      const startDate = new Date(item.start.utc).toLocaleDateString(
        "en",
        options
      );
      const clickedDate = new Date(date).toLocaleDateString("en", options);

      return startDate === clickedDate;
    });
    setSelectedEvent(filteredEvents);
    console.log(filteredEvents);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-sidebar-container">
        <Calendar onClickDay={handleDayClick} onChange={setDate} date={date} />
        <div className="calendar-sidebar-wrapper">
          <div className="sidebar-header-container">
            <h3>Upcoming Events:</h3>
            <p className="selected-date-text">
              Events schedule for{" "}
              <span className="bold">{date.toDateString()}</span>
            </p>
          </div>
          <div className="sidebar-events-container">
            {loading ? (
              <span>Looking for events...</span>
            ) : selectedEvent.length > 0 ? (
              <span>
                {selectedEvent.map((date, idx) => {
                  return (
                    <EventDetails date={date} label="Find Tickets" key={idx} />
                  );
                })}
              </span>
            ) : (
              <p> No events found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
