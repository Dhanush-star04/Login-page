const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock user data (no database needed)
const email = "dhanush@nimbus.com";
const password = "Dhanush@123";

app.post("/login", (req, res) => {
  console.log(req.body);

  if (req.body.email === email && req.body.password === password) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});