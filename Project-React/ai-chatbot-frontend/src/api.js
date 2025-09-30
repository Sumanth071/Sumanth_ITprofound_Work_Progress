import axios from "axios";

const API_URL = "http://localhost:5000/chat";

export const getGroqResponse = async (messages) => {
  try {
    const res = await axios.post(API_URL, { messages });
    return res.data.choices[0].message.content;
  } catch (err) {
    console.error("Frontend → Backend error:", err.response?.data || err.message);
    return "Error: Unable to fetch response.";
  }
};
