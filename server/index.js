import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.send(response.data);
  } catch (error) {
    let responseData = {
      activity: "Go to the gym",
      type: "education",
      participants: 1,
    };
    console.log("khdkhasdkhkj" + error);
    res.send(responseData);
  }
});

app.post("/", async (req, res) => {
  try {
    const { type, participants } = req.body;

    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const results = response.data;
    const randomResult = results[Math.floor(Math.random() * results.length)];
    res.send(randomResult);
  } catch (error) {
    res.send(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
