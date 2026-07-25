const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentControllers");

router.get("/", getStudents);

router.get("/:id", getStudent);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;