import React, { useContext, useEffect, useState } from "react";
import Table from "../../components/Tables/Table";
import { CourseContext } from "../../contexts/CoursesContexs";
import { AuthContext } from "../../contexts/AuthContext";
import { Modal, Button } from "react-bootstrap";
import { API } from "../../services/Api";
import sign from "jwt-encode";
import { jwtDecode } from "jwt-decode";

const TeacherCourses = () => {
  const { allCourses, setAllCourses } = useContext(CourseContext);
  const { userData } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchbtn, setSearchbtn] = useState(true);
  const [myCourses, setMyCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [semester, setSemester] = useState("First");

  useEffect(() => {
    if (allCourses && userData) {
      const filteredCourses = allCourses.filter(
        (course) => course?.instructorEmail === userData?.email
      );

      setMyCourses(filteredCourses);
    }
    setSearchbtn(!searchbtn);
  }, [allCourses, userData]);

  const headers = [
    "id",
    "Course Name",
    "Semester",
    "instructor Name",
    "instructor Email",
    "Actions",
  ];

  const handleUpdateSave = async (updatedCourseData) => {
    try {
      await API.course.updateCourse(updatedCourseData);

      const response = await API.course.courses();
      const updatedCourses = response.data;
      setAllCourses(updatedCourses);
      const myCoursesFiltered = updatedCourses.filter(
        (course) => course?.instructorEmail === userData?.email
      );
      setMyCourses(myCoursesFiltered);
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await API.course.deleteCourse(courseId);

        // Delete the associated notification
      const notificationResponse = await API.notification.allNotifications();
      const notifications = notificationResponse.data;

      // Find the notification associated with the course
      const notificationToDelete = notifications.find(
        (notification) =>
          notification.type === "newCourse" && notification.id === courseId
      );

      if (notificationToDelete) {
        await API.notification.deleteNotification(notificationToDelete.id);
      }

        const response = await API.auth.allUsers();
        const users = response.data.map((user) => {
          const decoded = jwtDecode(user.accessToken);
          return { ...decoded, accessToken: user.accessToken };
        });

        for (let user of users) {
          const currentEnrolls = user.enrolls || [];
          const updatedEnrolls = currentEnrolls.filter(
            (enrollId) => enrollId !== Number(courseId)
          );

          const { accessToken, ...updatedUserData } = user;
          const newUserData = { ...updatedUserData, enrolls: updatedEnrolls };

          const newAccessToken = sign(newUserData, "your-256-bit-secret");

          await API.auth.updateUser(newUserData.id, { accessToken: newAccessToken });
        }

        const updatedCoursesResponse = await API.course.courses();
        const updatedCourses = updatedCoursesResponse.data;
        setAllCourses(updatedCourses);
        const myCoursesFiltered = updatedCourses.filter(
          (course) => course?.instructorEmail === userData?.email
        );

        setMyCourses(myCoursesFiltered);
      } catch (error) {
        console.error("Failed to delete course:", error);
      }
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      const filteredCourses = allCourses.filter(
        (course) => course?.instructorEmail === userData?.email
      );
      setMyCourses(filteredCourses);
    } else {
      const userCourses = allCourses.filter((course) =>
        course?.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMyCourses(userCourses);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  const handleSave = async () => {
    try {
      const response = await API.course.courses();
      const existingCourses = response.data;
      const highestId = existingCourses.reduce((max, course) => {
        return Math.max(max, Number(course.id));
      }, 0);

      const newCourseId = String(highestId + 1);

      const courseData = {
        id: newCourseId,
        courseName,
        semester,
        instructorName: userData.name,
        instructorEmail: userData.email,
      };

      await API.course.createCourse(courseData);
      const updatedResponse = await API.course.courses();
      const updatedCourses = updatedResponse.data;
      setAllCourses(updatedCourses);
      const myCoursesFiltered = updatedCourses.filter(
        (course) => course?.instructorEmail === userData?.email
      );
      setMyCourses(myCoursesFiltered);
      setShow(false);
      setCourseName("");
      setSemester("First");

      const notificationResponse = await API.notification.allNotifications();
      const notifications = notificationResponse.data;
      const highestNotificationId = notifications.reduce(
        (max, notification) => {
          return Math.max(max, Number(notification.id));
        },
        0
      );
      const newNotificationId = (highestNotificationId + 1).toString();

      const notificationDate = formatDate(new Date());
      const notification = {
        id: String(newNotificationId),
        type: "newCourse",
        from: courseData.courseName,
        date: notificationDate,
      };
      await API.notification.createNotification(notification);
    } catch (error) {
      console.error("Failed to create course:", error);
    }
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
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div className="buttons d-flex">
            <button
              type="button"
              className="btn btn-secondary p-2 me-1 my-1"
              onClick={() => handleSearch()}
            >
              Search
            </button>
            <Button
              className="me-1 my-1"
              variant="primary"
              onClick={handleShow}
            >
              Create
            </Button>
          </div>
        </div>
        <Table
          Headers={headers}
          Datas={myCourses}
          handleUpdateSave={handleUpdateSave}
          handleDelete={handleDelete}
          Container={false}
          Actionbtn={"myCourses"}
        />

        {/* <!-- Modal --> */}
        <Modal show={show} onHide={handleClose} className="mt-5">
          <Modal.Header closeButton>
            <Modal.Title>Create Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              autoFocus
              type="text"
              className="form-control p-1 m-1 border-3 border-second"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
            <select
              className="form-control p-1 m-1 border-3 border-second"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="First">First Semester</option>
              <option value="Second">Second Semester</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex gap-2 ">
              <Button
                className="px-3"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button className="px-5" variant="success" onClick={handleSave}>
                Save
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default TeacherCourses;
