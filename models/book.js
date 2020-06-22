const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  synopsis: { type: String, required: true },
  image: { type: Image, required: false},
  link: { type: URL, required: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
