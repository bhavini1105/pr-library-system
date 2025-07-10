import React from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">📘 Library</Link>
        <div className="collapse navbar-collapse text-white" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
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

    
    <div className="container mt-5">
      <AddBook />
      <BookList />
    </div>
  </>
);

export default Dashboard;
