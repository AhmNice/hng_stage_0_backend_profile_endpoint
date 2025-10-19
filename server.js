import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "./route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.send(`Server is running on ${PORT}`);
});

app.use(router)
app.listen(PORT, () => {
  console.log("Server is up and running...🚀");
});
