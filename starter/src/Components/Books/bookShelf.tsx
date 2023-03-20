import React, { Component } from "react";
import Book from "./book";

class BookShelf extends Component<any, any> {
  render() {
    // this.getBooks()
    // const { books, bookshelf } = this.state
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book: any, index: number) => (
          <Book key={index}
            book={book}
            // books={books}
            // key={book.id}
            // changeShelf={changeShelf}
          />
        ))}
      </ol>
    );
  }
}

export default BookShelf;
