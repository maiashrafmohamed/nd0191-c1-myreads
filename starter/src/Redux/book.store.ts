import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book.slice";
export const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;
export type Dispatcher = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
