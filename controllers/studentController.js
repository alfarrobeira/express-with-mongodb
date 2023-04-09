import Blog from "../models/studentModel.js";
import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const createStudent = asyncHandler(async (req, res) => {
  const { first_name, name, email } = req.body;
  const newStudent = await Blog.create({
    first_name,
    name,
    email,
  });
  res.status(201).json(newStudent);
});

const getStudents = asyncHandler(async (req, res) => {
    // find() returns all entries; optionally limit the number of entries returned
    const students = await Blog.find(); //.limit(3);

    res.json(students);
});

const editStudentName = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { first_name } = req.body;
  const updatedStudent = await Blog.findByIdAndUpdate(
    { _id: id },
    { first_name: first_name }
  );

  if (!updatedStudent) 
    throw new apiError("Could not update student.", 404);

  res.json(updatedStudent);
});

const deleteStudentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedStudent = await Blog.findByIdAndDelete({ _id: id });

  if (!deletedStudent) 
    throw new apiError("Could not delete student.", 500);

  return res.json(deletedStudent);
});

export { createStudent, getStudents, editStudentName, deleteStudentById };
