import { IBook } from "../../Models/book.model";
import ShelfCharger from "./shelfCharger";

interface Props {
    book: IBook;
  }
const Book: React.FC<Props> = ({book}) => {
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
              <ShelfCharger book= {book}></ShelfCharger>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
          </div>
        </li>
      </div>
    );
  }

export default Book;
