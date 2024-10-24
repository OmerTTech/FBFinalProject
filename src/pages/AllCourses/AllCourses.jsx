import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Semestr from "../../components/Semestr/Semestr";
import { CourseContext } from "../../contexts/CoursesContexs";
import { useParams } from "react-router-dom";

const Courses = () => {
  // Sahte veri dizisi
  const { id } = useParams();
  const {allCourses} = useContext(CourseContext)
  let coursesBySemester = null
  if (id == 1) {
    coursesBySemester = allCourses.filter((courses)=> courses.semester === "FIRST_SEMESTER")
  } else if (id == 2) {
    coursesBySemester = allCourses.filter((courses)=> courses.semester === "SECOND_SEMESTER")
  }

  return (
    <div>
      <Semestr page={"courses/register"}/>
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