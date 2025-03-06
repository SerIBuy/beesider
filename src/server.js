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

app.get("/", (_, res) => {
  res.send("Welcome to server!");
});

app.get("/news", async (req, res) => {
  const { year = 2019, month = 12 } = req.query;
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh`
    );

    if (!response.ok) {
      throw new Error("Data fetching error");
    }

    const data = await response.json();
    res.json(data.response.docs);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
