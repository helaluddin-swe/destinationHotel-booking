const MONGO_URI ="mongodb+srv://DestinationCoder:DestinationCoder@cluster0.cwhxwm9.mongodb.net/";
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDb connected");
  } catch (err) {
    console.error("Failed to connected", err);
  }
};
module.exports = connectDB;
