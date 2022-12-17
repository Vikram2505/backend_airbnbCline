import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.NODE_ENV);
    //     if (process.env.NODE_ENV === "development") {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      // "mongodb://localhost:27017/airbnb-clone"
      "mongodb+srv://vikram:vikram@testapi.yszcywk.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    // } else if (process.env.NODE_ENV === "production") {
    //   const conn = await mongoose.connect(
    //     "mongodb+srv://vikram:vikram@testapi.yszcywk.mongodb.net/?retryWrites=true&w=majority"
    //   );
    //   console.log(`MongoDB Connected: ${conn.connection.host}`);
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
