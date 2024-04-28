import mongoose from "mongoose";
import { dbname } from "../constants.js";

async function connectdb() {
  try {
    const databaseInstance = await mongoose.connect(
      `${process.env.DBURL}/${dbname}`
    );
    console.log(
      "Database Connection Host : ",
      databaseInstance.connection.host
    );
  } catch (error) {
    console.log("Error Occured");
    console.error(error.message);

    process.exit(1); // Program will crash if error occurs
  }
}

export default connectdb;
