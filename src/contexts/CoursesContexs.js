import { createContext, useEffect, useState } from "react";
import { API } from "../services/Api";

const CourseContext = createContext();

const CoursesProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const getAllCourses = async () => {
    try {
      const {data} = await API.course.courses();
      setAllCourses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourses();  
  }, []);
  

  return (
    <CourseContext.Provider value={{ allCourses, setAllCourses }}>
      {children}
    </CourseContext.Provider>
  );
};
export { CourseContext, CoursesProvider };
