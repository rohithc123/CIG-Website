//TODO set up rate limit
//TODO allow API access only from certain domains

import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import MongoConnection from "./../services/database";
import teamRouter from "./../routes/team";
import blogRouter from "./../routes/blog";
import eventRouter from "./../routes/event";

dotenv.config();
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.log(uri);
  console.log("Define the MONGODB_URI environment variable inside .env");
  process.exit(1);
}

mongoose
  .connect(uri)
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit(1);
  });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../backend/uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const app = express();
const port = 5000;

app.use(express.json());
app.use(teamRouter);
app.use(eventRouter);
app.use(blogRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
