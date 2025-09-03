import React, { useContext } from "react";
import "./Semestr.css";
import { AuthContext } from "../../contexts/AuthContext";

const Semestr = () => {
  const { userData } = useContext(AuthContext);
  const getSemester =
    userData.semester === "FIRST_SEMESTER"
      ? "FIRST"
      : userData.semester === "SECOND_SEMESTER"
      ? "SECOND"
      : null;
  return (
    <div className="semestr-box bg-primary mt-1 mb-4 mx-auto p-2 rounded-5 col-md-4 d-flex justify-content-around align-items-center">
      <span className={`semestr-text ${getSemester === "FIRST" && "active"}`}>Semestr 1</span>
      <span className={`semestr-text disabled ${getSemester === "SECOND" && "active"}`}>Semestr 2</span>
    </div>
  );
};

export default Semestr;
