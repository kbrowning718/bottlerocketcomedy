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

  useEffect(() => {
    setLoading(true);
    const data = getEvents().then((data) => {
      setEventData(data);
      setLoading(false);
    });
  }, []);

  const handleDayClick = (date) => {
    console.log(date);
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
            <span>{eventData?.events?.name?.html}</span>
          )}
          <p>{getDateString(eventData?.start?.utc)}</p>
        </div>
      </div>
    </div>
  );
};
