import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import Todo from "./models/todo.js";

const port = process.env.PORT;

const mongoConnection = process.env.MONGODB_URI;

mongoose
  .connect(mongoConnection)
  .then(async () => {
    console.log("Mongoose: Connection Successful");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection Rejected", error);
  });

app.get("/todos", async (req, res) => {
  try {
    const getAllTodos = await Todo.find();
    res.json(getAllTodos);
  } catch (error) {
    console.log("Error fetching todo", error);
    res.status(500).json({ error: "Failed to fetch todo" });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todoInfo = await Todo.create(req.body);
    res.json("Todo created");
  } catch (error) {
    console.log("Error creating todo", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodoEntry = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.json(updatedTodoEntry);
  } catch (error) {
    console.log("Error updating todo", error);
    res.status(500).json({ error: "Failed to update todo" });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodoEntry = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodoEntry);
  } catch (error) {
    console.log("Error deleting todo", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
});
