const express = require("express");
const cors = require("cors");
const fs=require("fs");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "https://react-mini-projects-two-tau.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// Demo API
app.get("/api/posts", (req, res) => {
const posts = JSON.parse(
    fs.readFileSync("./data/posts.json", "utf-8")
  );
  res.json(posts);
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
