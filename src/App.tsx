import "./App.css";
import Book from "./components/Book";
import { book1, book2, book3 } from "./Data";

function App() {
  return (
    <>
      <Book livro={book1} />
      <Book livro={book2} />
      <Book livro={book3} />
    </>
  );
}

export default App;
