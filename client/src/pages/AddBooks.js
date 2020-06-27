import React, { Component } from "react";
import SearchForm from "../components/Forms/SearchForm";
import List from "../components/List/List";
import API from "../utils/API";

class Search extends Component {
  state = {
    book: {}
  };

  // When this component mounts, search the Books API

  componentDidMount() {
    this.searchBooks("Harry Potter and the Sorcerer's Stone");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
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
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <List results={this.state.results} />
      </div>
    );
  }
}

export default Search;
