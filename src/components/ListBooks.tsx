import data from "../Data";
import Book from "./Book";

function ListBooks() {
  return (
    <>
      <h1>ListBooks</h1>
      <Book lista={data} />
    </>
  );
}

export default ListBooks;
