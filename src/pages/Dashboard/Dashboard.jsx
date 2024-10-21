import React from "react";
import Searchbar2 from "../../components/Searchbar/Searchbar2";
import Infoboxs from "../../components/Infoboxs/Infoboxs";
import NotificationBoxes from "../../components/NotificationBoxes/NotificationBoxes";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Searchbar2 />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />

      <Infoboxs />

      <Link to="/notifications" title="View all Notification" style={{ cursor: "pointer" }}>
        <NotificationBoxes isPageDashboard={"true"} />
      </Link>
    </>
  );
};

export default Dashboard;
