import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./book.store";

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: {
        books:[],
        searchBooks:[],
    },
    reducers: {
        getAllBooks(state: any, action: any) {
            state.books = action.payload;
        },
        updateBooks(state: any, action: any) {
            state.books = action.payload;
        },
        searchOfBooks(state: any, action: any) {
            state.searchBooks = action.payload;
        },
    }
})
export default bookSlice.reducer;

export const bookAction = bookSlice.actions;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
