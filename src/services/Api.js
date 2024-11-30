import axios from "axios";

const API_URL = "http://localhost:5001";

export const api = axios.create({
  baseURL: API_URL,
});

export const API = {
  auth: {
    allUsers: () => api.get("/users"),
    createUser: (user) => api.post("/users", user),
    updateUser: (id, user) => api.patch(`/users/${id}`, user),
    deleteUser: (id) => api.delete(`/users/${id}`),
    registerUser: (user) => api.post(`/register`, user),
  },
  course: {
    courses: () => api.get("/courses"),
    createCourse: (course) => api.post(`/courses`, course),
    updateCourse: (course) => api.put(`/courses/${course.id}`, course),
    deleteCourse: (courseId) => api.delete(`/courses/${courseId}`),
    enrollCourse: (course) => api.post(`/enrollments`, course),
    courseEnrollments: () => api.get("/enrollments"),
  },
  notification: {
    allNotifications: () => api.get("/notifications"),
    createNotification: (notification) => api.post("/notifications", notification),
    updateNotification: (id, notification) => api.patch(`/notifications/${id}`, notification),
    deleteNotification: (id) => api.delete(`/notifications/${id}`),
  },
};
