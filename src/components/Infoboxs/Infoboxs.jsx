import React from 'react'
import './Infoboxs.css'
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi";

const Infoboxs = () => {
  return (
    <div className="container mb-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter primary">
              <MdOutlineLibraryBooks className="icon"/>
              <span className="count-numbers">4</span>
              <span className="count-name">Courses</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter danger">
            <HiOutlineClipboardDocumentList className="icon"/>
              <span className="count-numbers">12</span>
              <span className="count-name">Exams</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter success">
            <PiChalkboardTeacher className="icon"/>
              <span className="count-numbers">7</span>
              <span className="count-name">Teachers</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter info">
            <PiStudent className="icon"/>
              <span className="count-numbers">35</span>
              <span className="count-name">Students</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Infoboxs