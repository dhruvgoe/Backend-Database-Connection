import app from "./app.js";
import dotenv from "dotenv";
import connectdb from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectdb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Port Number : ", PORT);
    });
  })
  .catch((error) => {
    console.log("Error Occured", error.message);
  });
