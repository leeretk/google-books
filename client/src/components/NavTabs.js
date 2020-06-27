import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#search"
          onClick={() => props.handlePageChange("Search")}
          className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#books"
          onClick={() => props.handlePageChange("SavedBooks")}
          className={props.currentPage === "SaveBooks" ? "nav-link active" : "nav-link"}
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
