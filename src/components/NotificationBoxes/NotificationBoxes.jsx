import React, { useEffect, useState } from "react";
import "./NotificationBoxes.css";
import BoxOfNotification from "./BoxOfNotification";

const NotificationBoxes = ({ isPageDashboard }) => {
  const [screenSize, setScreenSize] = useState("large"); // Başlangıçta varsayılan olarak 'large' ayarlıyoruz

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1500) {
        setScreenSize("large");
      } else if (window.innerWidth > 1400) {
        setScreenSize("medium");
      } else {
        setScreenSize("small");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // İlk yüklemede boyutu kontrol et
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const notifications = [
    { type: "newTask", from: "Programming lesson", time: getFormattedDateTime("09.09.2024 14:30") },
    { type: "newTask", from: "Programming lesson", time: getFormattedDateTime("09.09.2024 14:45") },
    { type: "upcomingExam", from: "Programming lesson", time: getFormattedDateTime("09.09.2024 15:25") },
    { type: "upcomingExam", from: "Programming lesson", time: getFormattedDateTime("09.09.2024 15:35") },
    { type: "upcomingExam", from: "Programming lesson", time: getFormattedDateTime("09.09.2024 15:45") },
  ];

  const displayedNotifications = isPageDashboard
    ? (screenSize === "large" ? notifications.slice(0, 5) : screenSize === "medium" ? notifications.slice(0, 4) : notifications.slice(0, 3))
    : notifications;

  return (
    <div className="notifications-container d-flex flex-column">
      {displayedNotifications.map((notification, index) => (
        <BoxOfNotification
          key={index}
          type={notification.type}
          from={notification.from}
          time={notification.time}
        />
      ))}
    </div>
  );
};

export default NotificationBoxes;