import * as BooksAPI from '../Services/BooksAPI';
import { Dispatch } from "redux";
import { bookAction } from './book.slice';

export const getAllBooks = () => (dispatch: Dispatch) => {
    BooksAPI.getAll().then(books =>{
      dispatch(bookAction.getAllBooks(books));
    }
    );
  };

export const updateBooks = (book : any , shelf : string, books: any) => (dispatch : Dispatch ) => {
    BooksAPI.update(book, shelf).then(() =>{
    let updatedBooks = [];
    updatedBooks = books.map((updateBook: any) => {
        if (updateBook.id === book.id ) {
          return {...updateBook, shelf: shelf};
        }
        return updateBook;
      });
    dispatch(bookAction.updateBooks(updatedBooks));
  }
  );
};

export const searchOfBooks = (query: string) => (dispatch: Dispatch) => {
    BooksAPI.search(query,20).then(books => {
    if (!Array.isArray(books)) {
      books = [];
    }
    dispatch(bookAction.searchOfBooks(books));
  });
};