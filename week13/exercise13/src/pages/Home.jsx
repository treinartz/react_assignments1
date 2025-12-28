import { books } from "../data/bookData";
import BookCard from "../components/BookCard.jsx";

function Home() {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} title={book.title} content={book.description} />
      ))}
    </div>
  );
}
export default Home;
