import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./bookShelf";
import { useAppSelector } from "../../Redux/book.slice";
import { useDispatch } from "react-redux";
import { Dispatcher } from "../../Redux/book.store";
import { getAllBooks } from "../../Redux/book.action";
import { IBook } from "../../Models/book.model";

const BookList: React.FC = () => {
  const books = useAppSelector<IBook[]>((state) => state?.books?.books);
  const dispatch = useDispatch<Dispatcher>();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
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
          {books.length > 0 &&
            shelfTypes.map((shelf, index) => {
              const shelfBooks = books.filter(
                (book: IBook) => book.shelf === shelf.type
              );
              return <BookShelf books={shelfBooks} key={index} />;
            })}
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

export default BookList;
