import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();


export const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then(() => {
      console.log("DB is connected");
    });
};

export default connectDB;





