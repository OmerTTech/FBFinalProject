import React from "react";
import Card from "../../components/Card/Card";

const Courses = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center row gy-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="col-4">
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
