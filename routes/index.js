const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const books = require("node-google-books-search-promise")

router.get("/search", (req, res) => {
  console.log(req.query)
  books.search(req.query.title).then(function ({
    results,
    response
  }) {
    console.log(results)
    var books = []
    results.forEach(element => books.push({
      title: element.title,
      author: element.authors,
      id: element.id,
      synopsis: element.description,
      image: element.thumbnail,
      link: element.link
    }))
    console.log(books)
    res.json(books);
  }).catch(err => console.log(err));
});

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});





module.exports = router;