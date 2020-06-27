import React from "react";
import { Link } from "react-router-dom";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/books"
          className={window.location.pathname === "books" ? "nav-link active" : "nav-link"}
        >
          Saved Books
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/addbooks"
          className={window.location.pathname === "addbooks" ? "nav-link active" : "nav-link"}
        >
          Add Books
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
