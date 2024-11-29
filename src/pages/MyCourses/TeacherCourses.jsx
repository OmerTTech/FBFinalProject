import React, { useContext, useEffect, useMemo, useState } from "react";
import "./MyCourses.css";
import Table from "../../components/Tables/Table";
import { CourseContext } from "../../contexts/CoursesContexs";
import { AuthContext } from "../../contexts/AuthContext";
import { Modal, Button } from "react-bootstrap";
import { API } from "../../services/Api";

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
      console.log(allCourses);

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
      // Güncelleme sonrası allCourses'u güncelle
      const response = await API.course.courses();
      const updatedCourses = response.data;
      setAllCourses(updatedCourses); // Tüm kursları güncelle
      const myCoursesFiltered = updatedCourses.filter(
        (course) => course?.instructorEmail === userData?.email
      );
      setMyCourses(myCoursesFiltered); // Kullanıcının kurslarını güncelle
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await API.course.deleteCourse(courseId);
        // Silme sonrası allCourses'u güncelle
        const response = await API.course.courses();
        const updatedCourses = response.data;
        setAllCourses(updatedCourses); // Tüm kursları güncelle
        const myCoursesFiltered = updatedCourses.filter(
          (course) => course?.instructorEmail === userData?.email
        );
        console.log(myCoursesFiltered);
        
        setMyCourses(myCoursesFiltered); // Kullanıcının kurslarını güncelle
      } catch (error) {
        console.error("Failed to delete course:", error);
      }
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // searchTerm boşsa, tüm kursları geri döndür
      const filteredCourses = allCourses.filter(
        (course) => course?.instructorEmail === userData?.email
      );
      setMyCourses(filteredCourses);
    } else {
      // Kullanıcının mevcut kurslarını filtrele
      const userCourses = myCourses.filter((course) =>
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
      // Yeni kursu ekledikten sonra allCourses'u güncelle
      const updatedResponse = await API.course.courses();
      const updatedCourses = updatedResponse.data;
      setAllCourses(updatedCourses);
      // Kullanıcının kurslarını güncelle
      const myCoursesFiltered = updatedCourses.filter(
        (course) => course?.instructorEmail === userData?.email
      );
      setMyCourses(myCoursesFiltered); // Kullanıcının kurslarını güncelle

      setShow(false); // Modalı kapat
      setCourseName(""); // Kurs adını sıfırla
      setSemester("First"); // Dönemi varsayılan değere sıfırla
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
          Actionbtn={true}
        />

        {/* <!-- Modal --> */}
        <Modal show={show} onHide={handleClose} className="mt-5">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
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
