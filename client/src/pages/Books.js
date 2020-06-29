import React, { Component } from "react";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import LinkBtn from "../components/Buttons/LinkBtn";
import Jumbotron from "../components/Jumbotron/Jumbo";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/Grid";
import { List, ListItem } from "../components/List/List";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    link:"",
    images:"",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "", link: "", images:"" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  goToLink = link => window.location.assign(link)

  render() {
    return (
    <div className="container">
            <Jumbotron>
              <h1>Saved Books - Reading List</h1>
            </Jumbotron>
            
           {this.state.books.length ? (
              <List>
              {this.state.books.map(book => (
                <Row className="search-row" key={book._id}>
                  <Col size="md-10">
                      <Link to={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </Link>
                 </Col>
                 
                 <Col size="md-1">
                    <LinkBtn class="btn btn-success" onClick={() => this.goToLink(book.link)}/>
                    </Col>
                    <Col size="md-1">
                    <DeleteBtn class="btn btn-success" onClick={() => this.deleteBook(book._id)} />
                    </Col>
                    </Row>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
}

export default Books;
