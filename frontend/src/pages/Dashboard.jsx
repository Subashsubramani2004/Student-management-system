import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      className="container-fluid bg-light d-flex align-items-center"
      style={{ minHeight: "calc(100vh - 112px)" }}
    >
      <div className="container">

        <div className="text-center mb-5">

          <h1 className="display-4 fw-bold text-primary">
            Student Management System
          </h1>

          <p className="lead text-secondary">
            Manage student records quickly and efficiently.
          </p>

        </div>

        <div className="row justify-content-center g-4">

          <div className="col-md-4">

            <div className="card shadow border-0 h-100">

              <div className="card-body text-center">

                <h3>➕</h3>

                <h4>Add Student</h4>

                <p>Add a new student to the database.</p>

                <Link to="/add" className="btn btn-success">
                  Add Student
                </Link>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow border-0 h-100">

              <div className="card-body text-center">

                <h3>📋</h3>

                <h4>View Students</h4>

                <p>View, edit, and delete student records.</p>

                <Link to="/students" className="btn btn-primary">
                  View Students
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;