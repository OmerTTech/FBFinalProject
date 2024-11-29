import React, { useState } from "react";
import "./Tables.css";
import { Modal, Button } from "react-bootstrap";
import { API } from "../../services/Api";
import { SpinnerCircular } from "spinners-react";

const Table = ({
  Headers,
  Datas,
  handleUpdateSave,
  handleDelete,
  Container = true,
  Actionbtn = false,
}) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [semester, setSemester] = useState("First");

  const handleUpdateShow = (course) => {
    setSelectedCourse(course);
    setCourseName(course.courseName);
    setSemester(course.semester);
    setShowUpdateModal(true);
  };

  const handleUpdateClose = () => setShowUpdateModal(false);

  const handleUpdateSaveClick = async () => {
    const updatedCourseData = {
      id: String(selectedCourse.id),
      courseName,
      semester,
      instructorName: selectedCourse.instructorName,
      instructorEmail: selectedCourse.instructorEmail,
    };

    try {
      // Güncelleme işlemini yap
      await handleUpdateSave(updatedCourseData);
      setShowUpdateModal(false); // Modalı kapat
    } catch (error) {
      console.error("Failed to save changes:", error);
    }
  };

  const tableContent = (
    <>
      {Datas.length >= 1 ? (
        <table>
          <thead>
            <tr>
              {Headers?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Datas?.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((data, i) => (
                  <td key={i}>{data}</td>
                ))}
                {Actionbtn && (
                  <td>
                    <button
                      className="bg-success rounded text-white p-1 mx-1 border-2 border-second"
                      onClick={() => handleUpdateShow(item)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-danger rounded text-white p-1 mx-1 border-2 border-second"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="alert alert-danger m-0 text-center w-100">
          <SpinnerCircular size={30} speed={50} className="mx-2" />
          No Course Found..
        </p>
      )}
    </>
  );

  return (
    <>
      {Container ? (
        <div className="table-container mx-auto">{tableContent}</div>
      ) : (
        tableContent
      )}

      {/* Update Modal */}
      <Modal show={showUpdateModal} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
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
              onClick={handleUpdateClose}
            >
              Close
            </Button>
            <Button
              className="px-3 text-nowrap"
              variant="success"
              onClick={handleUpdateSaveClick}
            >
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Table;
