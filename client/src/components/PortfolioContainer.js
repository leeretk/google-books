import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class Portfolio extends Component {
  state = {
    currentPage: "Books"
  };

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Books") {
      return <Books />;
    } else if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Home") {
      return <Home />;
    } else {
      return <Books />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
