import React from "react";
import { IBook } from "../../Models/book.model";
import Book from "./book";


interface Props {
    books: IBook[];
  }
const BookShelf: React.FC<Props> = ({books}) => {

    return (
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{books.length >0 && books[0].shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book: IBook, index: number) => (
              <Book
                key={index}
                book={book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  
}

export default BookShelf;
