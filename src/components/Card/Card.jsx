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
    console.log(enrolledCourses);
    
    let updatedEnrolls = [...userData.enrolls];
    if (addBtn) {
      updatedEnrolls = enrolledCourses.filter((id) => id !== +Course.id); // Cancel of enrolled course
      toast.success(`Successfully canceled the \n${Course.courseName} course`);
    } else {
      // Enroll any course
      if (enrolledCourses.length < 4) {
        updatedEnrolls = [...enrolledCourses, Number(+Course.id)].sort((a, b) => a - b);
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

    const updatedUserData = { ...userData, enrolls: updatedEnrolls };
    console.log(updatedUserData);
    
    const newAccessToken = encodeJWT(updatedUserData);

    try {
      await API.auth.updateUser(userData.id, { accessToken: newAccessToken });

      if (localStorage.getItem("accessToken")) {
        localStorage.setItem("accessToken", newAccessToken);
      } else if (sessionStorage.getItem("accessToken")) {
        sessionStorage.setItem("accessToken", newAccessToken);
      }

      setAccessToken(newAccessToken);
      setUserData(updatedUserData);
      setEnrolledCourses(updatedEnrolls);
      setBtn(!addBtn);
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update the server.");
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
