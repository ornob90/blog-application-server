const mongoose = require("mongoose");

require("dotenv").config();

const getConnectionString = () => {
  let connectionUrl;

  connectionUrl = process.env.DATABASE_LOCAL;
  // console.log(connectionUrl);
  connectionUrl = connectionUrl.replace("<username>", process.env.DB_USER);

  connectionUrl = connectionUrl.replace("<password>", process.env.DB_PASS);
  return connectionUrl;
};

const connectDB = async () => {
  console.log("connection to database...");

  const mongoURI = getConnectionString();

  await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });

  // Shop.collection.drop((error) => {
  //   if (error) {
  //     console.error("Error dropping collection:", error);
  //   } else {
  //     console.log("Collection dropped successfully");
  //   }
  // });

  console.log("successfully connected to database!");
};

module.exports = connectDB;
