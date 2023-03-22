import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import BookList from "./Components/Books/bookList";
import Search from "./Components/Search/Search";
class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Routes>
          <Route path="/" Component={BookList} />
          <Route path="/search" Component={Search} />
        </Routes>
      </div>
    );
  }
}
export default App;
