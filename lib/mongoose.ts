// connecting mongoose
import mongoose from "mongoose";

let isConnected: boolean = false;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  // initially checking conditions
  if (!process.env.MONGODB_URI) {
    return console.log("MONGODB_URI not found");
  }

  if (isConnected) {
    return console.log("Already connected to database");
  }

  // connection to database function
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "mlsa-management-system",
    });

    // changing the boolean when the connection is done
    isConnected = true;

    console.log("Connected to database");
  } catch (error) {
    console.log("Error in connetion in database", error);
  }
};
