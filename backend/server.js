const express = require("express");

const connectDB = require("./config/db");
const router = require("./routes/hotelRoutes");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8000;

app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images
app.use("/api/hotels", router);
// db
connectDB()


  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  
