const express = require("express");
const cors = require("cors");
require("dotenv").config();

// middle wares

// error handlers
const globalErrorHandler = require("./utils/globalErrorHandler");

// routes

const blogRoutes = require("./routes/blog");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// utils

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      process.env.LOCAL_CLIENT,
      process.env.CLIENT_MAIN,
      process.env.CLIENT_SECONDARY,
    ],
    credentials: true,
  })
);

app.use(blogRoutes);
app.use(userRoutes);
app.use(authRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${res.originalUrl} on the server`);
  error.status = 404;

  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

// const main = async () => {
//   await connectDB();
//   // sendEMail();
//   app.listen(port, () => {
//     console.log("Server running...");
//   });
// };

// main();

module.exports = app;
