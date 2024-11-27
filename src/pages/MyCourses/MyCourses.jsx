import React, { useContext, useEffect, useState } from "react";
import Coursesboxs from "../../components/Infoboxs/Coursesboxs";
import Semestr from "../../components/Semestr/Semestr";
import Table from "../../components/Tables/Table";
import { CourseContext } from "../../contexts/CoursesContexs";
import { AuthContext } from "../../contexts/AuthContext";
import { API } from "../../services/Api";

const MyCourses = () => {
  const headers = [
    "id",
    "Course Name",
    "Semester",
    "instructor Name",
    "instructor Email",
  ];
  const { allCourses } = useContext(CourseContext);
  const { userData } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  const semesterLabel =
    userData.semester === "FIRST_SEMESTER"
      ? "First"
      : userData.semester === "SECOND_SEMESTER"
      ? "Second"
      : null;

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await API.course.courseEnrollments();

        const enrollments = response.data?.find(
          (enrollment) => enrollment.studentEmail === userData.email
        );
        
        if (enrollments) {
          const ids = enrollments.ids.slice(0, 4);
          const filteredCourses = allCourses.filter((course) => {
            return course.semester === semesterLabel && ids.includes(Number(course.id));
          });
          
          setMyCourses(filteredCourses);
          console.log(allCourses);
          
          
          
        }
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    };

    fetchEnrollments();
  }, [allCourses, userData.email, semesterLabel]);

  return (
    <div>
      <Coursesboxs Courses={myCourses} />

      <Semestr />

      <Table Headers={headers} Datas={myCourses} />
    </div>
  );
};

export default MyCourses;
