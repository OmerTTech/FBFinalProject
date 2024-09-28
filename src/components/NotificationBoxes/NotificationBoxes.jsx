import React from "react";
import "./NotificationBoxes.css";
import BoxOfNotification from "./BoxOfNotification";

const NotificationBoxes = ({ isPageDashboard }) => {
  const getFormattedDateTime = (dateTimeString) => {
    const dateTimeParts = dateTimeString.split(" ");
    const dateParts = dateTimeParts[0].split(".");
    const timeParts = dateTimeParts[1].split(":");
    const date = new Date(
      dateParts[2],
      dateParts[1] - 1,
      dateParts[0],
      timeParts[0],
      timeParts[1]
    );
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div
        className="notifications-container d-flex flex-column"
        style={{ maxHeight: (isPageDashboard) ? "49.5vh" : "100vh"}}
      >
        <BoxOfNotification
          type={"newTask"}
          from={"Programming lesson"}
          time={getFormattedDateTime("09.09.2024 14:30")}
        />
        <BoxOfNotification
          type={"newTask"}
          from={"Programming lesson"}
          time={getFormattedDateTime("09.09.2024 14:45")}
        />
        <BoxOfNotification
          type={"upcomingExam"}
          from={"Programming lesson"}
          time={getFormattedDateTime("09.09.2024 15:25")}
        />
        <BoxOfNotification
          type={"upcomingExam"}
          from={"Programming lesson"}
          time={getFormattedDateTime("09.09.2024 15:35")}
        />
      </div>
    </>
  );
};

export default NotificationBoxes;
