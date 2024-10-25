import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Semestr from "../../components/Semestr/Semestr";
import { CourseContext } from "../../contexts/CoursesContexs";
import { AuthContext } from "../../contexts/AuthContext";

const Courses = () => {
  const {userData} = useContext(AuthContext)
  
  const {allCourses} = useContext(CourseContext)
  let coursesBySemester = null
  if (userData.semester === "FIRST_SEMESTER") {
    coursesBySemester = allCourses.filter((courses)=> courses.semester === "First")
  } else if (userData.semester === "SECOND_SEMESTER") {
    coursesBySemester = allCourses.filter((courses)=> courses.semester === "Second")
  }

  return (
    <div>
      <Semestr />
      <div className="d-flex justify-content-center align-items-center row gy-4">
        {coursesBySemester?.map((course) => (
          <div key={course.courseId} className="col-xl-3 col-md-4 col-sm-12">
            <Card 
              Course={course} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;