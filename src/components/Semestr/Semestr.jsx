import React from "react";
import "./Semestr.css";

const Semestr = () => {
  return (
    <div className="semestr-box bg-primary mt-4 mx-auto p-2 rounded-5 col-4 d-flex justify-content-around align-items-center">
      <span className="semestr-text active">Semestr 1</span>
      <span className="semestr-text">Semestr 2</span>
    </div>
  );
};

export default Semestr;
