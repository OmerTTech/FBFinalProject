import React, { useContext, useEffect, useState } from "react";
import "./NotificationBoxes.css";
import BoxOfNotification from "./BoxOfNotification";
import { API } from "../../services/Api";
import { AuthContext } from "../../contexts/AuthContext";

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

  const [displayedNotifications, setDisplayedNotifications] = useState([]);
  const { userData } = useContext(AuthContext);
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await API.notification.allNotifications();
        const notificationDatas = response.data;
        const filteredNotifications = notificationDatas.filter(
          (notification) => {
            return  notification.type !=="enrollment" || notification.recipient === userData.email;
          }
        );

        const notificationsSlicer = isPageDashboard
          ? screenSize === "large"
            ? filteredNotifications.slice(0, 5)
            : screenSize === "medium"
            ? filteredNotifications.slice(0, 4)
            : filteredNotifications.slice(0, 3)
          : filteredNotifications;
        setDisplayedNotifications(notificationsSlicer);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    getNotifications();
  }, []);

  return (
    <div className="notifications-container d-flex flex-column">
      {displayedNotifications.map((notification, index) => (
        <BoxOfNotification
          key={index}
          type={notification.type}
          student={notification.student}
          from={notification.from}
          time={notification.date}
        />
      ))}
    </div>
  );
};

export default NotificationBoxes;
