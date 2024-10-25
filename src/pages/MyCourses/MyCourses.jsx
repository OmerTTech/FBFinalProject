import React, { useContext } from "react";
import Coursesboxs from "../../components/Infoboxs/Coursesboxs";
import Semestr from "../../components/Semestr/Semestr";
import Table from "../../components/Tables/Table";
import { CourseContext } from "../../contexts/CoursesContexs";
import { AuthContext } from "../../contexts/AuthContext";

const MyCourses = () => {
  const headers = [
    "id",
    "Course Name",
    "Semester",
    "instructor Name",
    "instructor Email",
  ];
  const {allCourses} = useContext(CourseContext)
  const {userData} = useContext(AuthContext)
  let coursesBySemester = null
  if (userData.semester === "FIRST_SEMESTER") {
    coursesBySemester = allCourses.filter((courses)=> courses.semester === "First")
  } else if (userData.semester === "SECOND_SEMESTER") {
    coursesBySemester = allCourses.filter((courses)=> courses.semester === "Second")
  }
  
  return (
    <div>
      <Coursesboxs Courses={coursesBySemester}/>

      <Semestr />

      <Table Headers={headers} Datas={coursesBySemester}/>
    </div>
  );
};

export default MyCourses;
