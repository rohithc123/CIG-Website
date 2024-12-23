//TODO set up rate limit
//TODO allow API access only from certain domains

import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../backend/uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
