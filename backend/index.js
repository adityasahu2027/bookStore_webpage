const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URI;
//connect to MongoDB
try {
 mongoose.connect(MONGOURL, {
 
  
 })
 console.log("first connection to MongoDB successful");
} catch (error) {
  console.log(" Error connecting to MongoDB",error);
}

app.get("/", (req, res) => {
  res.send("bookstore backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
