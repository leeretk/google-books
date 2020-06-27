import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#search"
          onClick={() => props.handlePageChange("SearchBooks")}
          className={props.currentPage === "SearchBooks" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#books"
          onClick={() => props.handlePageChange("Books")}
          className={props.currentPage === "Books" ? "nav-link active" : "nav-link"}
        >
          Saved Books
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#books"
          onClick={() => props.handlePageChange("AddBooks")}
          className={props.currentPage === "AddBooks" ? "nav-link active" : "nav-link"}
        >
          Add Books
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
