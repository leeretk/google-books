import React, { Component } from "react";
import List from "../components/List/List";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import Col from "../components/Grid/Col";
import Row from "../components/Grid/Row";
import SaveBtn from "../components/Buttons/SaveBtn"
import LinkBtn from "../components/Buttons/LinkBtn"
import { Input, FormBtn } from "../components/Forms/AddBook"
import API from "../utils/API";


class Search extends Component {
  state = {
    book: {},
    searchBooks:[],
    author:"",
    title:"",
    link:"",
    images:""
  };

  // When this component mounts, search the Books API

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.searchBooks(query)
    .then(res => {
      console.log(res.data)
      this.setState({ searchBooks: res.data, title: "", author: ""})
    })
    .catch(err => console.log(err));
  };

  saveBook = (id,title,author,synopsis,image,link) => {
    let newAuthor = ""
    if (author==='undefined') {
      newAuthor = ""
    } else {
      newAuthor = author[0]
    }
    API.saveBook({
      _id: id,
      title: title,
      author: newAuthor,
      synopsis: synopsis,
      image:image,
      link:link
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));

  };

  viewBooks = query => {
    API.searchBooks(query)
    .then(res => {
      console.log(res.data)
      this.setState({ viewBooks: res.data, title: "", author: "", images:""})
    })
    .catch(err => console.log(err));
  }; 

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });  //name is in square brackets sets it equal to search
  };

  // When the form is submitted, search the Books API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks({title: this.state.title,
      author: this.state.author});
  };

  goToLink = link => window.location.assign(link)

  render() {
    return (
      <div>
      <form style={{marginBottom:80}}>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Find Book
              </FormBtn>
            </form>

      {this.state.searchBooks.length ? (
        <List>
          {this.state.searchBooks.map(book => (
            <Row className="search-row" key={book.id}>
              <Col size="md-3">
                <Thumbnail
                  title={book.title}
                  image={book.image}
                />
                <strong>
                  {book.title} by {book.author}
                </strong>
              </Col>
              <Col size="md-7">
                {book.synopsis}
              </Col>
              <Col size="md-1">
                <SaveBtn onClick={() => this.saveBook(
                  book._id,
                  book.title,
                  book.author,
                  book.synopsis,
                  book.images,
                  book.link)
                } />
              </Col>
              <Col size="md-1">
              <LinkBtn onClick={() => this.goToLink(book.link)}/>
              </Col>
            </Row>
          ))}
        </List>
      ) : (
          <h3>Enter Title and Author to Search</h3>
        )}

    </div>
  );
}
}
export default Search;
