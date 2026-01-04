const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Demo API
app.get("/api/posts", (req, res) => {
  res.json([
    {
      id: 1,
      title: "React Basics",
      description: "Learn React fundamentals",
      date: "2026-01-01"
    },
    {
      id: 2,
      title: "Vite + Vercel",
      description: "Deploy React apps easily",
      date: "2026-01-03"
    }
  ]);
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
