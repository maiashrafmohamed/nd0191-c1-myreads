import React, { Component } from "react";

class Search extends Component {
  render() {
    // this.getBooks()
    // const { books, bookshelf } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            // onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default Search;
