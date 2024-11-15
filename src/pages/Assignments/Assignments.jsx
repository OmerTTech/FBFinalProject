import React from "react";
import "./Assignments.css";
import Semestr from "../../components/Semestr/Semestr";

const Assignments = () => {
  const fakeData = [];
  return (
    <>
      <Semestr />
      <div className="Assignment table-container mx-auto">
        {fakeData.length <= 0 && (
          <p className="alert alert-danger m-0 text-center w-100">
            No Assignment Found...
          </p>
        )}
      </div>
    </>
  );
};

export default Assignments;
