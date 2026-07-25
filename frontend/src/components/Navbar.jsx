import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          🎓 StudentMS
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">
            Dashboard
          </Link>

          <Link className="nav-link" to="/add">
            Add Student
          </Link>

          <Link className="nav-link" to="/students">
            View Students
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;