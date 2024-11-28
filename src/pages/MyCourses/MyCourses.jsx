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

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        // const response = await API.course.courseEnrollments();

        // const enrollments = response.data?.find(
        //   (enrollment) => enrollment.studentEmail === userData.email
        // );

        if (userData) {
          const enrolls = userData.enrolls.slice(0, 4);

          const filteredCourses = allCourses.filter((course) => {
            return enrolls.includes(Number(course.id));
          });

          setMyCourses(filteredCourses);
        }
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    };

    fetchEnrollments();
  }, [allCourses, userData.email]);

  return (
    <div>
      <Coursesboxs Courses={myCourses} />

      <Semestr />

      <Table Headers={headers} Datas={myCourses} />
    </div>
  );
};

export default MyCourses;
