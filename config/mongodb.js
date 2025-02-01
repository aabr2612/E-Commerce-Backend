import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
};
export default connectDB;

