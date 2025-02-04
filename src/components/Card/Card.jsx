import React, { useState, useEffect, useContext } from "react";
import "./Card.css";
import { API } from "../../services/Api";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import sign from "jwt-encode";

const Card = ({ Course }) => {
  const [addBtn, setBtn] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const { userData, setUserData, setAccessToken } = useContext(AuthContext);

  useEffect(() => {
    if (userData && Course.id) {
      const getEnrolls = userData.enrolls || [];
      setEnrolledCourses(getEnrolls);

      if (getEnrolls.includes(+Course.id)) {
        setBtn(true);
      }
    }
  }, [userData, Course.id]);

  const btnHandler = async () => {
    let updatedEnrolls = [...userData.enrolls];
    if (addBtn) {
      updatedEnrolls = enrolledCourses.filter((id) => id !== +Course.id);
      toast.success(`Successfully canceled the \n${Course.courseName} course`);
    } else {
      if (enrolledCourses.length < 4) {
        updatedEnrolls = [...enrolledCourses, Number(+Course.id)].sort(
          (a, b) => a - b
        );
        toast.success(
          `Successfully registered for the \n${Course.courseName} course`
        );
      } else {
        toast.error("You can only choose 4 courses");
        return;
      }
    }

    const encodeJWT = (userData) => {
      const secret = "your-256-bit-secret";
      return sign(userData, secret);
    };
    const { accessToken, ...updatedUserData } = userData;
    const newUserData = { ...updatedUserData, enrolls: updatedEnrolls };
    const newAccessToken = encodeJWT(newUserData);

    try {
      await API.auth.updateUser(userData.id, { accessToken: newAccessToken });

      if (localStorage.getItem("accessToken")) {
        localStorage.setItem("accessToken", newAccessToken);
      } else if (sessionStorage.getItem("accessToken")) {
        sessionStorage.setItem("accessToken", newAccessToken);
      }

      setAccessToken(newAccessToken);
      setUserData(newUserData);
      setEnrolledCourses(updatedEnrolls);
      setBtn(!addBtn);
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update the server.");
    }

    let notificationId;

    if (addBtn) {
      try {
        const response = await API.notification.allNotifications();
        const notifications = response.data;
        const notificationToDelete = notifications.find(
          (notification) =>
            notification.type === "enrollment" &&
            notification.from === Course.courseName &&
            notification.student === `${userData.name} ${userData.surname}`
        );
        if (notificationToDelete) {
          notificationId = notificationToDelete.id;
          await API.notification.deleteNotification(notificationId);
        }
      } catch (error) {
        console.error("Failed to delete notification:", error);
      }
    } else {
      try {
        const response = await API.notification.allNotifications();
        const notifications = response.data;

        const highestId = notifications.reduce((max, notification) => {
          return Math.max(max, Number(notification.id));
        }, 0);

        const formatDate = (date) => {
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          const hours = String(date.getHours()).padStart(2, "0");
          const minutes = String(date.getMinutes()).padStart(2, "0");
      
          return `${day}-${month}-${year} ${hours}:${minutes}`;
        };
      

        const notification = {
          id: (highestId + 1).toString(),
          type: "enrollment",
          student: `${userData.name&&userData.name} ${userData.surname&&userData.surname}`,
          from: Course.courseName,
          recipient: Course.instructorEmail,
          date: formatDate(new Date()),
        };

        await API.notification.createNotification(notification);
      } catch (error) {
        console.error("Failed to create Notification:", error);
        toast.error("Failed to create Notification");
      }
    }
  };

  return (
    <div>
      <div className="courseCard">
        <p
          className="courseHeading"
          style={{
            fontSize:
              Course.courseName.length > 16
                ? Course.courseName.length > 21
                  ? "1.10rem"
                  : "1.35rem"
                : "1.5rem",
          }}
        >
          {Course.courseName || "Empty.."}
        </p>
        <p className="courseOwner">{Course.instructorName || "Empty.."}</p>
        <button
          onClick={btnHandler}
          className={`${
            addBtn ? "cancelButton bg-danger btn-danger" : "btn-success"
          } w-50 btn text-white`}
        >
          {addBtn ? "Cancel" : "Enroll"}
        </button>
      </div>
    </div>
  );
};

export default Card;
