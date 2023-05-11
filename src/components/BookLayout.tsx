import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const BookLayout = () => {
  return (
    <>
      <Link to="/books/1">
        <h3>First Book</h3>
      </Link>
      <Link to="/books/2">
        <h3>Second Book</h3>
      </Link>
      <Link to="/books/new">
        <h3>New Book</h3>
      </Link>
      <Outlet context={{ hello: "World" }} />
    </>
  );
};

export default BookLayout;
