import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Corsbox = ({title,text}) => {
  return (
    <div className="col-md-3">
      <div className="course-card primary">
        <HiOutlineClipboardDocumentList className="icon" />
        <span className="course-title text-md-end text-lg-center text-sm-center text-wrap text-break">{title || ""}</span>
        <span className="course-name">{text || ""}</span>
      </div>
    </div>
  );
};

export default Corsbox;
