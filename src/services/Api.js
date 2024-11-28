import axios from "axios";

const API_URL = "http://localhost:5000";

export const api = axios.create({
  baseURL: API_URL,
});

export const API = {
  auth: {
    allData: () => api.get("/users"),
    createUser: (user) => api.post("/users", user),
    updateUser: (id, user) => api.patch(`/users/${id}`, user),
    deleteUser: (id) => api.delete(`/users/${id}`),
    getLogin: () => api.get("/users"),
    registerUser: (user) => api.post(`/register`, user),
  },
  course: {
    courses: () => api.get("/courses"),
    createCourse: (course) => api.post(`/courses`, course),
    enrollCourse: (course) => api.post(`/enrollments`, course),
    courseEnrollments: () => api.get("/enrollments"),
    },
};
