import React, { useState } from "react";
import "./Card.css";

const Card = ({ Course }) => {
  const [addBtn, setBtn] = useState(false);

  const btnHandler = () => {
    setBtn(!addBtn);
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
          } w-50 btn  text-white`}
        >
          {addBtn ? "Cancel" : "Enroll"}
        </button>
      </div>
    </div>
  );
};

export default Card;
