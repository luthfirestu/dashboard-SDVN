import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI;
    if (mongodbUri) { // Memeriksa apakah MONGODB_URI tidak bernilai undefined
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(mongodbUri);
        console.log("db connected");
      }
    } else {
      throw new Error("MONGODB_URI is not defined");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
