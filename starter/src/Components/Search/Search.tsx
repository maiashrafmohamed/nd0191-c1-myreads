import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IBook } from "../../Models/book.model";
import { searchOfBooks } from "../../Redux/book.action";
import { useAppSelector } from "../../Redux/book.slice";
import { Dispatcher } from "../../Redux/book.store";
import Book from "../Books/book";

const Search: React.FC = () => {
  const dispatch = useDispatch<Dispatcher>();

  const searchAllBooks = (event: any) => {
    dispatch(searchOfBooks(event.target.value));
  };
  const searchBooks: IBook[] = useAppSelector<IBook[]>(
    (state) => state?.books?.searchBooks
  );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author"
            onChange= {searchAllBooks}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.length > 0 ? (
            searchBooks.map((book: IBook, index: number) => (
              <Book key={index} book={book} />
            ))
          ) : (
            <div>No Books here</div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
