import React, { useContext, useMemo, useState } from "react";
import Table from "../../components/Tables/Table";
import { CourseContext } from "../../contexts/CoursesContexs";
import { AuthContext } from "../../contexts/AuthContext";

const TeacherCourses = () => {
  const { allCourses } = useContext(CourseContext);
  const { userData } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchbtn, setSearchbtn] = useState(true);

  const myCourses = allCourses.filter(
    (course) => course.instructorEmail === userData.email
  );

  const headers = [
    "id",
    "Course Name",
    "Semester",
    "instructor Name",
    "instructor Email",
  ];

  const handleSearch = useMemo(() => {
    return myCourses.filter((course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },[searchbtn])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="table-container mx-auto">
        <div className="SearchTitle d-flex">
          <input
            type="text"
            className="form-control p-1 m-1"
            placeholder="Search Course name.."
            value={searchTerm}
            onChange={(e)=>handleInputChange(e)}
          />
          <div className="buttons d-flex col-3">
            <button
              className="btn btn-secondary p-0 me-1 my-1"
              onClick={()=>setSearchbtn(!searchbtn)}
            >
              Search
            </button>
            <button className="btn btn-success me-1 my-1">Create</button>
          </div>
        </div>
        <Table
          Headers={headers}
          Datas={handleSearch.length > 0 ? handleSearch : handleSearch}
          Container={false}
        />
      </div>
    </>
  );
};

export default TeacherCourses;
