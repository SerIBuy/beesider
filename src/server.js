import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

app.get("/news", async (req, res) => {
  const response = await fetch(
    "https://api.nytimes.com/svc/archive/v1/2015/1.json?api-key=vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh"
  );
  const data = await response.json();
  res.json(data.response.docs);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
