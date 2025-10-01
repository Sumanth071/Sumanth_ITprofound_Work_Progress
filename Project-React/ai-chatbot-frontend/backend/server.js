import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
const API_URL = process.env.GROQ_API_URL;
const API_KEY = process.env.GROQ_API_KEY;

app.post("/chat", async (req, res) => {
  try {

    const response = await axios.post(
      API_URL,
      {
        model: "llama-3.1-8b-instant", 
        messages: req.body.messages,   
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Groq API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Groq request failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
