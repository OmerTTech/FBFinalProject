import React from 'react'
import './Coursesboxs.css'
import Corsbox from './Corsbox';

const Coursesboxs = () => {
  const corsboxes = [
    { title: "IT and programmers 1", text: "Courses" },
    { title: "IT and programmers 2", text: "Courses" },
    { title: "IT and programmers 3", text: "Courses" },
    { title: "IT and programmers 4", text: "Courses" },
    { title: "Extra course", text: "This won't show" } // 5. eleman gösterilmeyecek
  ];

  return (
    <div className="container mb-4">
      <div className="row">
        {corsboxes.slice(0, 4).map((box, index) => (
          <Corsbox key={index} title={box.title} text={box.text} />
        ))}
      </div>
    </div>
  )
}

export default Coursesboxs;
