import { useOutletContext, useParams } from "react-router-dom";

const Books = () => {
  const { id } = useParams();
  const obj: any = useOutletContext();
  return (
    <h1>
      Book {id} {obj.hello}
    </h1>
  );
};

export default Books;
