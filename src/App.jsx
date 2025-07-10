import React from "react";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router";
import SignUp from "./components/SignUp";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return(  
  <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/add" element={<AddBook />} />
    <Route path="/list" element={<BookList />} />
  </Routes>
  );

}

export default App;
