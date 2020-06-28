import React, { Component } from "react";
import List from "../components/List/List";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Forms/AddBook"
import Thumbnail from "../components/Thumbnail/Thumbnail'";

class Search extends Component {
  state = {
    book: {},
    searchBooks:[],
    author:"",
    title:""
  };

  // When this component mounts, search the Books API

  componentDidMount() {
    this.searchBooks("Harry Potter and the Sorcerer's Stone");
  }

  searchBooks = query => {
    API.searchBooks(query)
    .then(res => {
      console.log(res.data)
      this.setState({ searchBooks: res.data, title: "", author: ""})
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
      </div>
      <div>
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
              <Col size="md-2">
                <SaveBtn onClick={() => this.saveBook(
                  book.id,
                  book.title,
                  book.author,
                  book.synopsis,
                  book.image,
                  book.link)
                } />
                <LinkBtn onClick={() => this.goToLink(book.link)}/>
              </Col>
            </Row>
          ))}
        </List>
      ) : (
          <h3>Enter Title and Author to Search</h3>
        )}
    </Col>

    </div>

    );
  }
}

export default Search;
