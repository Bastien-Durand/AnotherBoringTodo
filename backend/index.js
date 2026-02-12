import express from "express";
const app = express();
app.use(express.json());
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
    console.log("Error creating todo", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todoInfo = await Todo.create(req.body);
    res.send("Todo Created");
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
    res.json("Entry successfully updated");
  } catch (error) {
    console.log("Error updating todo", error);
    res.status(500).json({ error: "Failed to update todo" });
  }
});

app.delete("/todos/:id", async (req, res) => {
  // req.params.id are the arguments for below
  try {
    const deletedTodoEntry = await Todo.findByIdAndDelete(req.params.id);
    res.json("Entry successfully deleted");
  } catch (error) {
    console.log("Error deleting todo", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
});
