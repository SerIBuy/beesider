import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { mockedNewsJen, mockedNewsFeb } from "./mockNews.js";

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
  const year = parseInt(req.query.year);
  const month = parseInt(req.query.month);

  if (year === 2019 && month === 1) {
    res.json(mockedNewsJen);
  } else if (year === 2019 && month === 2) {
    res.json(mockedNewsFeb);
  } else {
    return res.status(404).json({ error: "No data for this period" });
  }
  // try {
  //   const response = await fetch(
  //     `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh`
  //   );

  //   if (!response.ok) {
  //     throw new Error("Data fetching error");
  //   }

  //   const data = await response.json();
  //   res.json(data.response.docs);
  // } catch (error) {
  //   console.log(error);
  // }

  // мокаем запрос
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
