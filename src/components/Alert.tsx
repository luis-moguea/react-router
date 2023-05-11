import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import "../App.css";
import NotFound from "./NotFound";
import BookRoutes from "./BookRoutes";

const Alert = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/*" element={<BookRoutes />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default Alert;
