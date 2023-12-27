const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const rootRouter = require('./routes/index')
const app = express();

const bdUrl = "mongodb+srv://root:root@todocluster.gmd59hg.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;

app.use(express.json());
app.use(cors())
app.use('/home', rootRouter);

const main = async () => {
  try {
    await mongoose.connect(bdUrl);
    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error)
  }
};
main();
