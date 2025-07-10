import React from "react";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router";
import SignUp from "./components/SignUp";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import SignIn from "./components/Signin";

function App() {
  return(  
  <Routes>
  <Route path="/" element={<SignUp />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="add" element={<AddBook />} />
    <Route path="list" element={<BookList />} />
  </Route>
</Routes>

  );

}

export default App;
