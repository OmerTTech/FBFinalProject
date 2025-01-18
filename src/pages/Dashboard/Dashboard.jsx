import React, { useState } from "react";
import Infoboxs from "../../components/Infoboxs/Infoboxs";
import NotificationBoxes from "../../components/NotificationBoxes/NotificationBoxes";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotificationCount = (count) => {
    setNotificationCount(count);
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />

      <Infoboxs />

      <Link
        to="/notifications"
        title="View all Notification"
        className="d-flex flex-column gap-2"
        style={{ cursor: "default" }}
      >
        <NotificationBoxes isPageDashboard={"true"} onNotificationCount={handleNotificationCount} />
        {notificationCount > 0 && (
          <div className={`bordex-x-purple shadow-sm card notification new-assignment`}>
            <div className="card-body p-1 d-flex justify-content-between">
              <Link to="/notifications" className="viewAll mx-auto">View all notifications</Link>
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default Dashboard;
