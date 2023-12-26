const express = require("express");
const mongoose = require("mongoose");
const rootRouter = require('./routes/index')
const app = express();

app.use('/', rootRouter);

const main = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nschicherin:8nvSkYKeV9CFAJeF@todocluster.gmd59hg.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(5000, () => {
      console.log("SERVER STARTED ON PORT 5000");
    });
  } catch (error) {}
};
main();
