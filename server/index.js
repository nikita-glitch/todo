const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const rootRouter = require('./routes/index')
const app = express();

app.use(express.json());
app.use(cors())
app.use('/home', rootRouter);

const main = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@todocluster.gmd59hg.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(5000, () => {
      console.log("SERVER STARTED ON PORT 5000");
    });
  } catch (error) {
    console.log(error)
  }
};
main();
