import API from "./api";

export const getStudents = () => API.get("/");

export const getStudentById = (id) => API.get(`/${id}`);

export const addStudent = (student) => API.post("/", student);

export const updateStudent = (id, student) => API.put(`/${id}`, student);

export const deleteStudent = (id) => API.delete(`/${id}`);