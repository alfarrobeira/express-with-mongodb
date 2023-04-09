import { Router } from "express";
import { getStudents, createStudent, editStudentName, deleteStudentById } from "../controllers/studentController.js";

const studentRoutes = new Router();

studentRoutes.route("/")
    .get(getStudents)
    .post(createStudent);

studentRoutes.route("/:id")
    .put(editStudentName)
    .delete(deleteStudentById);

export default studentRoutes;
;