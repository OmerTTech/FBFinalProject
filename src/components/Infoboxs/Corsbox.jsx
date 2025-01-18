import React from "react";
import "./Coursesboxs.css"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Corsbox = ({title="",text="",length=0}) => {
  let classNamesForBoxNums = null
  if (length >= 4) {
    classNamesForBoxNums = "col-sm-12 col-md-6 col-lg-3"
  } else if (length == 3) {
    classNamesForBoxNums = "col-sm-12 col-md-6 col-lg-4"
  } else if (length == 2) {
    classNamesForBoxNums = "col-sm-12 col-md-6 col-lg-6"
  } else {
    classNamesForBoxNums = "col-sm-12 col-md-6 col-lg-6 mx-auto"
  }
  return (
    <div className={classNamesForBoxNums}>
      <div className="course-card primary">
        <HiOutlineClipboardDocumentList className="icon" />
        <span className="course-title text-md-end text-lg-center text-center text-wrap text-break">{title}</span>
        <span className="course-name">{text}</span>
      </div>
    </div>
  );
};

export default Corsbox;
