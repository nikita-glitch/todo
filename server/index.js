const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
const cors = require("cors");
const rootRouter = require("./routes/index");
const errorHandler = require('./middleware/handleError')
const app = express();

const corsOptions = {
  origin: "localhost:",
  optionSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/home", rootRouter);
app.use(errorHandler.handleError)

const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
    });
  } catch (error) {
    return console.log(error);
  }
};
main();
