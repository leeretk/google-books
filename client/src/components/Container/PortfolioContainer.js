import React, { Component } from "react";
import NavTabs from "./components/NavTabs";
import Search from "./pages/Search";
import Books from "./pages/Books";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Books") {
      return <Books />;
    } else {
      return <Search />;
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
