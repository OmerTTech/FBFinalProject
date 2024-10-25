import React from 'react'
import './Coursesboxs.css'
import Corsbox from './Corsbox';

const Coursesboxs = ({Courses}) => {
  const CoursesBySliced = Courses.slice(0, 4)
  return (
    <div className="container mb-4">
      <div className="row">
        {CoursesBySliced?.map((course, index) => (
          <Corsbox key={index} length={CoursesBySliced.length} title={course.courseName} text={`Course ${++index}`} />
        ))}
      </div>
    </div>
  )
}

export default Coursesboxs;
