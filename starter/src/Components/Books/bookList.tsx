import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./bookShelf";
import * as BooksAPI from "../../BooksAPI";

class BookList extends Component<any, any> {

  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    // this.getBooks()
    // const { books, bookshelf } = this.state

    // const { books, changeShelf } = this.props;
    const shelfTypes = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" },
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            {this.state.books.length > 0 && shelfTypes.map((shelf, index) => {
              const shelfBooks = this.state.books.filter(
                (book: any) => book.shelf === shelf.type
              );
              return (
                <div className="bookshelf" key={index}>
                  <h2 className="bookshelf-title">{shelf.title}</h2>
                  <div className="bookshelf-books">
                    {/* <BookShelf books={shelfBooks} changeShelf={changeShelf} /> */}
                    <BookShelf books={shelfBooks} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
