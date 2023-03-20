import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import BookList from "./Components/Books/bookList";
import Search from "./Components/Search/Search";
class App extends Component {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  render(): React.ReactNode {
    return (
      <div className="app">
        <Routes>
          <Route  path="/" Component={BookList} />
          <Route
            path="/search"
            Component={Search}
            // render={ () => (
            //     <SearchBooks
            //         savedBooks={books}
            //         onFormatBook={this.formatBookInfo}
            //     />
            // )}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
