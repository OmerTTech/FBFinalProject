import React from 'react'
import Coursesboxs from '../../components/Infoboxs/Coursesboxs'
import Artable from '../../components/Article_td/Artable'
import Semestr from '../../components/Semestr/Semestr'


const MyCourses = () => {
  return (
    <div>
        <Coursesboxs/>

        <Semestr page="courses"/>

        <Artable pageUrl="courses" title="My Courses"/>
    </div>
  )
}

export default MyCourses