const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors({
  origin: [
    "https://react-mini-projects-two-tau.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(express.json());

app.get("/api/posts", (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "posts.json");
    const posts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load posts" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
