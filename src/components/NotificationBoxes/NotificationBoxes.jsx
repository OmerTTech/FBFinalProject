import React from "react";
import "./NotificationBoxes.css";

const NotificationBoxes = () => {
  // Function to get formatted date and time
  const getFormattedDateTime = (dateTimeString) => {
    const dateTimeParts = dateTimeString.split(' ');
    const dateParts = dateTimeParts[0].split('.');
    const timeParts = dateTimeParts[1].split(':');
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0], timeParts[0], timeParts[1]);
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
      <div class="notifications-container mt-4">
        <div class="card notification new-assignment new-task">
          <div class="card-body d-flex justify-content-between">
            <div>
              <h5 class="card-title">New Task!</h5>
              <p class="card-text">
                A new assignment has been added to the{" "}
                <span className="font-monospace">Programming lesson</span>.
              </p>
            </div>
            <p class="card-text text-muted">
            <small>{getFormattedDateTime("09.09.2024 14:30")}</small>
            </p>
          </div>
        </div>
        <div class="card notification new-assignment new-task">
          <div class="card-body d-flex justify-content-between">
            <div>
              <h5 class="card-title">New Task!</h5>
              <p class="card-text">
                A new assignment has been added to the{" "}
                <span className="font-monospace">Programming lesson</span>.
              </p>
            </div>
            <p class="card-text text-muted">
            <small>{getFormattedDateTime("09.09.2024 14:30")}</small>
            </p>
          </div>
        </div>

        <div class="card notification upcoming-exam">
          <div class="card-body d-flex justify-content-between">
            <div>
              <h5 class="card-title">Upcoming Exam!</h5>
              <p class="card-text">
                3 days left for the{" "}
                <span className="font-monospace">Programming exam</span>.
              </p>
            </div>
            <p class="card-text text-muted">
            <small>{getFormattedDateTime("09.09.2024 14:30")}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationBoxes;