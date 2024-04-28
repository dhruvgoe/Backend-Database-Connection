import express, { request, response } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json({
    success: true,
    message: "Server Working OK",
  });
});

export default app;
