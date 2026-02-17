import mongoose from "mongoose";
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
});

const Todo = model("Todo", todoSchema);
export default Todo;
