const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String, required: true},
  date: { type: Date, default: Date.now },
  link: { type: String, required: false },
  imageURL: {type: String , required: false}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
