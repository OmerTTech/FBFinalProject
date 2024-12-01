import React, { useContext, useEffect, useState } from "react";
import "./NotificationBoxes.css";
import BoxOfNotification from "./BoxOfNotification";
import { API } from "../../services/Api";
import { AuthContext } from "../../contexts/AuthContext";
import { SpinnerInfinity } from "spinners-react";

const NotificationBoxes = ({ isPageDashboard }) => {
  const [screenSize, setScreenSize] = useState("large");
  const [displayedNotifications, setDisplayedNotifications] = useState([]);
  const { userData, teacher } = useContext(AuthContext);

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

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await API.notification.allNotifications();
        const notificationDatas = response.data;
        const sortedNotifications = notificationDatas.sort(
          (a, b) => b.id - a.id
        );
        const filteredNotifications = sortedNotifications.filter(
          (notification) => {
            if (notification.type === "newCourse" && teacher) {
              return false;
            }
            return (
              notification.type !== "enrollment" ||
              notification.recipient === userData.email
            );
          }
        );

        const notificationsSlicer = isPageDashboard
          ? screenSize === "large"
            ? filteredNotifications.slice(0, 5)
            : screenSize === "medium"
            ? filteredNotifications.slice(0, 4)
            : filteredNotifications.slice(0, 3)
          : filteredNotifications;

          console.log(notificationsSlicer);
          
        setDisplayedNotifications(notificationsSlicer);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    getNotifications();
  }, []);

  return (
    <div className="notifications-container d-flex flex-column">
      {displayedNotifications.length > 0 ? displayedNotifications.map((notification, index) => (
          <BoxOfNotification
            key={index}
            type={notification.type}
            student={notification.student}
            from={notification.from}
            time={notification.date}
          />
        )
      ) : (
        <p className="alert alert-danger m-0 text-center w-100">
          <SpinnerInfinity size={50} speed={50} className="mx-3" />
          No Notification Found..
        </p>
      )}
    </div>
  );
};

export default NotificationBoxes;
