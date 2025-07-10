import React from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { Link } from "react-router";

const Dashboard = () => (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">📘 Library</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Book</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">Book List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Dashboard;
