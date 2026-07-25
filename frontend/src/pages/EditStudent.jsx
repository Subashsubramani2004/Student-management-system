import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../services/studentService";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const res = await getStudentById(id);
      setStudent(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateStudent(id, student);
      alert("Student Updated Successfully");
      navigate("/students");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-warning text-dark">
          <h3>Edit Student</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Roll Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="rollNo"
                  value={student.rollNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={student.department}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Year</label>
                <input
                  type="number"
                  className="form-control"
                  name="year"
                  value={student.year}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={student.phone}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button className="btn btn-success">
              Update Student
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default EditStudent;