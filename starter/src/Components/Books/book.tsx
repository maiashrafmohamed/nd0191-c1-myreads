import { Component } from "react";
import PropTypes from "prop-types";
import ShelfCharger from "./shelfCharger";

class Book extends Component<any, any> {
  static propTypes = {
    book: PropTypes.object.isRequired,
    // books: PropTypes.array.isRequired,
    // changeShelf: PropTypes.func.isRequired
  };

  render() {
    // this.getBooks()
    const { book } = this.props;

    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks?.thumbnail})`,
                }}
              ></div>
              <ShelfCharger></ShelfCharger>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>
      </div>
    );
  }
}

export default Book;
