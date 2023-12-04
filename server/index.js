import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// let data = "";

app.get("/", async (req, res) => {
  const response = await axios.get("https://bored-api.appbrewery.com/random");
  res.send(response.data);
});

app.post("/", async (req, res) => {
  try {
    const { type, participants } = req.body;
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const results = response.data;
    const randomData = results[Math.floor(Math.random() * results.length)];
    res.send(randomData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
