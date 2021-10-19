const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to datatbase
connectDB();

//Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

//Body parser
app.use(express.json());

/** if middle ware added here, it will have access to req, res cycle and can set param value which
 *   will be avaliable to other fuction which have access to req/res cycle */
// app.use(logger); //Example of custom middleware

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);

//Handle unHandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`unHandled Rejection : ${err.message}`);
  //Close server
  server.close(() => process.exit(1));
});
