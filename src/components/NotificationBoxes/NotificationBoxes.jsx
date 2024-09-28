import React from "react";
import "./NotificationBoxes.css";
import BoxOfNotification from "./BoxOfNotification";

const NotificationBoxes = () => {

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
      <div class="notifications-container mt-2 d-flex flex-column">
        <BoxOfNotification
          type={"newTask"}
          from={"Programming lesson"}
          time={getFormattedDateTime("09.09.2024 14:30")}
          />
        <BoxOfNotification
          type={"newTask"}
          from={"Programming lesson"}
          time={getFormattedDateTime("09.09.2024 14:30")}
        />
        <BoxOfNotification
          type={"upcomingExam"}
          from={"Programming lesson"}
          time={getFormattedDateTime("09.09.2024 14:30")}
        />
      </div>
    </>
  );
};

export default NotificationBoxes;
