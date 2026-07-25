import { useState } from "react";
import { addStudent } from "../services/studentService";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(student);
      alert("Student Added Successfully");

      setStudent({
        name: "",
        rollNo: "",
        department: "",
        year: "",
        email: "",
        phone: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error Adding Student");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          placeholder="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Roll Number"
          name="rollNo"
          value={student.rollNo}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Department"
          name="department"
          value={student.department}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Year"
          name="year"
          value={student.year}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Phone"
          name="phone"
          value={student.phone}
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Add Student
        </button>

      </form>
    </div>
  );
}

export default AddStudent;