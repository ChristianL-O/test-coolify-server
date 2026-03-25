const express = require("express");

const app = express();
const port = 3000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});