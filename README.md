# Google Books Search

1. Start by using the 07-Ins_Mern example as a base for your application.

## Overview

In this activity, you'll create a new React-based Google Books Search app. This assignment requires you to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. You'll also use Node, Express and MongoDB so that users can save books to review or purchase later.

## LIVE LINK: https://whispering-hollows-74592.herokuapp.com/

## GITHUB: https://leeretk.github.io/google-books/

### Technical Outline

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* Search Page:
  1) GET - Search Google Books API
  2) SCRAPE - Book Details
  3) POST to Mongo Save Books for later

* Saved Books Page:
  1) POST searched books to Mongodb
  2) GET - view saved books from Mongo
  3) DELETE saved books from Mongo

* Google Books search with npm node-google-books-search-promise

* Mongo Database:
  1) mongod
  2) googlebooks
  3) mongoose (scripts)
      3.a) book schema
           a) title
           b) authors
           c) description
           d) image
           e) link

* Express Routes:
  1) `/api/books` (get) - Should return all saved books as JSON.
  2) `/api/books` (post) - Will be used to save a new book to the database.
  3) `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
  4) `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

* JSON format: Creating `documents` in your `books` collection similar to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

### Bonus Live Updates to Saved Books

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.

  * Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.

  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

- - -

### Create a README.md

### Add To Your Portfolio

### Hosting on Heroku


