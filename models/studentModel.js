import mongoose from "mongoose";
const { Schema, model } = mongoose;

const studentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address!"]
    }
})

export default model("Student", studentSchema);