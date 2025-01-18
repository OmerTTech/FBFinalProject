import React from "react";

const BoxOfNotification = ({ type, student, from, time }) => {
  const boxType = {
    newCourse: "new-task-box",
    enrollment: "enrollment-box",
  };
  const titleForType = {
    newCourse: "New Course!",
    enrollment: "New enrollment!",
  };
  const textForType = {
    newCourse: "A new Course has been added to the",
    enrollment: `A new student named ${student} has enrolled for the`,
  };
  return (
    <div
      className={`shadow-sm card notification new-assignment ${
        boxType[type] || "Not Found.."
      }`} style={{ cursor: "pointer" }}
    >
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title">{titleForType[type] || "Not Found.."}</h5>
          <p className="card-text">
            {`${textForType[type] || "Not Found.."} `}
            <span
              className="font-monospace fw-bolder"
              style={{ fontSize: "1.1rem" }}
            >
              {from || "Not Found.."}
            </span>
            .
          </p>
        </div>
        {time && (
          <span className="timestamp">
            <small>{time}</small>
          </span>
        )}
      </div>
    </div>
  );
};

export default BoxOfNotification;
