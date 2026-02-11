import express from "express";
const app = express();
import dotenv from "dotenv/config";
import mongoose from "mongoose";

const port = process.env.PORT;

const mongoConnection = process.env.MONGODB_URI;

mongoose
  .connect(mongoConnection)
  .then(() => {
    console.log("Mongoose: Connection Successful");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection Rejected", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Request on /");
});

app.post("/create", (req, res) => {
  res.send("Create endpoint");
  console.log("Request on /create!");
});

app.get("/read", (req, res) => {
  res.send("Read endpoint!");
  console.log("Request on /read!");
});

app.put("/update", (req, res) => {
  res.send("Update endpoint!");
  console.log("Request on /update");
});

app.delete("/delete", (req, res) => {
  res.send("Delete endpoint");
  console.log("Request on /delete!");
});
