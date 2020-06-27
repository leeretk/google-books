import React, { Component } from "react";
import NavTabs from "./components/NavTabs";
import SearchBooks from "../../pages/SearchBooks";
import AddBooks from "../../pages/AddBooks";
import SavedBooks from "../../pages/Books";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "SearchBooks") {
      return <SearchBooks />;
    } else if (this.state.currentPage === "SavedBooks") {
      return <SavedBooks />;
    } else if (this.state.currentPage === "AddBooks") {
      return <AddBooks />;
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
