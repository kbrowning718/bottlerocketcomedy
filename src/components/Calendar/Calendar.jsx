import "./Calendar.css";
import { useState } from "react";
import { useEffect } from "react";
import { eventBriteApiToken } from "../../consts.js";
import { event_id } from "../../consts.js";
import { eventbrite } from "../../api/eventbrite.js";
import { getDateString } from "../../helper.js";
import { organization_id } from "../../consts.js";
import Calendar from "react-calendar";

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
  };

  return (
    <div className="calendar-container">
      <div className="calendar-sidebar-container">
        <Calendar
          className="calendar"
          onClickDay={handleDayClick}
          onChange={setDate}
          date={date}
        />
        <div className="calendar-sidebar-wrapper">
          <h3>Upcoming Events:</h3>
          <p>
            <span className="bold">{date.toDateString()}</span>
          </p>
          <p>Event Name:</p>
          {loading ? (
            <span>Looking for events...</span>
          ) : (
            <span>
              {selectedEvent.map((date, idx) => {
                return <p key={idx}>{date?.name?.html}</p>;
              })}
            </span>
          )}
          <span>
            {selectedEvent.map((date, idx) => {
              return <p key={idx}>{date?.url}</p>;
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
