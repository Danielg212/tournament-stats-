import express from "express"; // Backend App (server)
import mongoose from "mongoose"; // MongoDB (database)
import cors from "cors"; // HTTP headers (enable requests)
// import morgan from 'morgan'; // Logs incoming requests
import dotenv from "dotenv"; // Secures variables

import routes from "./api/routes/httpRoutes.js";

// initialize app
const app = express();
const origin = "*";

// middlewares
dotenv.config();
app.use(cors({ origin }));
app.use(express.json({ limit: "1mb", extended: false })); // body parser
app.use(express.urlencoded({ limit: "1mb", extended: false })); // url parser
// app.use(morgan("common")); // logs requests

// configure db:
const MONGO_URI = process.env.MONGO_URI;
const DEPRECATED_FIX = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// connect to db
mongoose
  .connect(MONGO_URI, DEPRECATED_FIX)
  .catch((error) => console.log("❌ MongoDB connection error", error)); // listen for errors on initial connection

const db = mongoose.connection;
db.on("connected", () => console.log("✅ MongoDB connected")); // connected
db.on("disconnected", () => console.log("❌ MongoDB disconnected")); // disconnected
db.on("error", (error) => console.log("❌ MongoDB connection error", error)); // listen for errors during the session

// routes
app.get("/", (request, response, next) =>
  response.status(200).json("statistics app")
);
app.use("/api/", routes);

// server is listening for requests
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`✅ Server is listening on port: ${PORT}`);
});
