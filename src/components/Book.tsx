function Book({ lista }) {
  return (
    <>
      {lista.map((livro) => (
        <div>
          <h2>{livro.title}</h2>
          <p>{livro.author}</p>
        </div>
      ))}
    </>
  );
}

export default Book;
