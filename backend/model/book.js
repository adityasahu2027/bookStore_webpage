const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
name :String,
description :String,
price: Number,
image: String,
category : String,


})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
