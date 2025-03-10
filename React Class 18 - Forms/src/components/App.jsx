import React, { useState } from "react";

function App() {
  //variáveis para tratar estado do input
  const [name, setName] = useState("");
  //variáveis para tratar estado do heading
  const [headingText, setHeading] = useState("");

  //função para tratar o evento de clique no botão
  function handleClick(event) {
    setHeading(name); //método para atualizar o estado do heading

    event.preventDefault(); //método para prevenir que a aplicação atualize ao estado inicial
  }

  //função para tratar o evento de mudança no input
  function handleChange(event) {
    setName(event.target.value); //método para atualizar o estado do input
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
