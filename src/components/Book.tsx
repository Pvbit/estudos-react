function Book({ livro }) {
  const { title, author, year, genre, image } = livro;

  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <img src={image} alt="" />
    </>
  );
}

export default Book;
