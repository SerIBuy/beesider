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

  const response = [
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-01T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-02T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-02T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-02T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-02T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-02T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-02T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-02T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-03T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
    {
      web_url:
        "https://www.nytimes.com/2019/01/01/us/politics/government-shutdown.html",
      snippet:
        "The partial government shutdown entered its second week with no end in sight.",
      lead_paragraph:
        "The partial government shutdown entered its second week with no end in sight as President Trump and congressional leaders remained at an impasse over funding for a border wall.",
      abstract:
        "The partial government shutdown continued into the new year as President Trump and Congress remained at an impasse over border wall funding.",
      print_page: "A1",
      source: "The New York Times",
      multimedia: [
        {
          url: "images/2019/01/01/us/politics/shutdown.jpg",
          format: "superJumbo",
          height: 2048,
          width: 1536,
          type: "image",
          subtype: "photo",
          caption:
            "The Capitol is seen as the partial government shutdown lingers on.",
          copyright: "Erin Schaff/The New York Times",
        },
      ],
      pub_date: "2019-01-04T10:00:00Z",
    },
  ];

  res.json(response);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
