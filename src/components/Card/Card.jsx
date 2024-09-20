import React, { useState } from "react";
import "./Card.css"

const Card = ({title, text}) => {
    const [addBtn, setBtn] = useState(false)

    const btnHandler = () => {
        setBtn(!addBtn)
    }
  return (
    <div>
      <div className="cookieCard">
        <p className="cookieHeading">{title || "IT and Programmers"}.</p>
        <p className="cookieDescription">
          {text || "By using this website you automatically accept that we use cookies"}
        </p>
        <button onClick={btnHandler} className={`${addBtn ? "cancelButton bg-danger btn-danger" : "btn-success"} w-50 btn  text-white`}>{addBtn ? "Cancel" : "Register"}</button>
      </div>
    </div>
  );
};

export default Card;
