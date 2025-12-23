const express = require("express");
const dotenv=require("dotenv")
dotenv.config()

const connectDB = require("./config/db");
const router = require("./routes/hotelRoutes");
const cors = require("cors");

const bodyParser = require("body-parser");
const allowedOrigin=["http://localhost:5174","https://helaluddin-swe-greenbooked.vercel.app"]
const app = express();
app.use(cors({origin:allowedOrigin,credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT =process.env.PORT ||5001;

app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images
app.use("/api/hotels", router);
// db
connectDB()
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  
