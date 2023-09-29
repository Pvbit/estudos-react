import "./App.css";

function App() {
  const name = "Paulo Vitor 02";
  const pessoas = [
    { nome: "Paulo Vitor", idade: 35 },
    { nome: "Ronaldinho", idade: 44 },
    { nome: "Edmundo", idade: 55 },
    { nome: "Romário", idade: 38 },
  ];
  return (
    <>
      <p className="primeironome">{name}</p>
      {pessoas.map((element) => (
        <div>
          <p>{element.nome}</p>
          <p>{element.idade}</p>
        </div>
      ))}
    </>
  );
}

export default App;
