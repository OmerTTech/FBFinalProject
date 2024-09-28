import React from "react";

const BoxOfNotification = ({ type, from, time }) => {
  const boxType = {
    newTask: "new-task-box",
    upcomingExam: "upcoming-exam-box",
  };
  const titleForType = {
    newTask: "New Task!",
    upcomingExam: "Upcoming Exam!",
  };
  const textForType = {
    newTask: "A new assignment has been added to the",
    upcomingExam: "3 days left for the",
  };
  return (
    <div
      class={`card notification new-assignment ${
        boxType[type] || "Not Found.."
      }`}
    >
      <div class="card-body d-flex justify-content-between">
        <div>
          <h5 class="card-title">{titleForType[type] || "Not Found.."}</h5>
          <p class="card-text">
            {`${textForType[type] || "Not Found.."} `}
            <span className="font-monospace">{from || "Not Found.."}</span>.
          </p>
        </div>
        {time && (
          <p class="card-text text-muted">
            <small>{time}</small>
          </p>
        )}
      </div>
    </div>
  );
};

export default BoxOfNotification;
