import "./Calendar.css";
import { useState } from "react";
import { useEffect } from "react";
import { eventBriteApiToken } from "../../consts.js";
import { event_id } from "../../consts.js";
import { eventbrite } from "../../api/eventbrite.js";
import { getDateString } from "../../helper.js";

const getEvents = async () => {
  const response = await eventbrite.get(
    `/events/${event_id}/?token=${eventBriteApiToken}`
  );
  return response.data;
};

export const Calendar = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const data = getEvents().then((data) => {
      setEventData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar">
        {loading ? <p>Loading...</p> : <p>{eventData?.name?.html}</p>}
        <p>{getDateString(eventData?.start?.utc)}</p>
      </div>
    </div>
  );
};
