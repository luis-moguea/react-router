import { Routes, Route } from "react-router-dom";
import Books from "./Books";
import BookList from "./BookList";
import NewBook from "./NewBook";
import BookLayout from "./BookLayout";

const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Books />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
