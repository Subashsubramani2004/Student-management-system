import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import ViewStudents from "./pages/ViewStudents";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container mt-4">

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/add" element={<AddStudent />} />

          <Route path="/students" element={<ViewStudents />} />

          <Route path="/edit/:id" element={<EditStudent />} />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;