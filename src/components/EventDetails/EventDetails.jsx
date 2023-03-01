import "./EventDetails.css";

export const EventDetails = ({ date, label }) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
  };

  const startTime = new Date(date?.start?.utc);
  return (
    <>
      <div className="event-detail-wrapper">
        <div className="event-name-time-container">
          <p>{date?.name?.html}</p>
          <p className="time">
            {new Intl.DateTimeFormat("en", options).format(startTime)}
          </p>
        </div>
      </div>
      <div className="event-summary-container">
        <p className="event-summary">{date?.summary}</p>
      </div>
      <div className="event-url-container">
        <a target="_blank" className="event-url" href={date?.url}>
          {label}
        </a>
      </div>
    </>
  );
};
