import React from "react";
import Card from "../../components/Card/Card";

const Courses = () => {
  // Sahte veri dizisi
  const courses = [
    {
      courseName: "React Development",
      instructorName: "John Doe",
    },
    {
      courseName: "Node.js Development",
      instructorName: "Jane Smith",
    },
    {
      courseName: "Python Programming",
      instructorName: "Alice Johnson",
    },
    {
      courseName: "Data Science",
      instructorName: "Bob Brown",
    },
    {
      courseName: "Web Development",
      instructorName: "Charlie White",
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center row gy-4">
        {courses.map((course) => (
          <div key={course.courseId} className="col-4">
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