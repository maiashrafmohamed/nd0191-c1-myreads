import { useAppSelector } from "../../Redux/book.slice";
import { useDispatch } from "react-redux";
import { Dispatcher } from "../../Redux/book.store";
import { updateBooks } from "../../Redux/book.action";
import { IBook } from "../../Models/book.model";

interface Props {
  book: IBook;
}
const ShelfCharger: React.FC<Props> = ({ book }) => {
  const books: IBook[] = useAppSelector<IBook[]>((state) => state?.books?.books);
  const dispatch = useDispatch<Dispatcher>();

  const updateShelf = (event: any) => {
    const shelf = event.target.value;
    dispatch(updateBooks(book, shelf, books));
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfCharger;
