import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); //aqui armazena-se o texto que o usuário digitar no input
  const [items, setItems] = useState([]); //aqui armazenam-se os itens da lista de tarefas (to-do list) que o usuário digitar

  function handleChange(event) { //essa função é chamada toda vez que o usuário digitar algo no input e pressionar enter
    const newValue = event.target.value; //aqui armazena-se o valor que o usuário digitou no input
    setInputText(newValue); //aqui atualiza-se o estado do inputText com o valor que o usuário digitou
  }

  function addItem() { //essa função é chamada toda vez que o usuário clicar no botão "Add" para adicionar um item à lista de tarefas
    setItems((prevItems) => { //aqui atualiza-se o estado dos itens da lista de tarefas com o valor que o usuário digitou no input
      return [...prevItems, inputText]; //aqui retorna-se um novo array com os itens antigos e o novo item que o usuário digitou utilizando o spread operator
    });
    setInputText(""); //aqui atualiza-se o estado do inputText para que ele fique vazio após o usuário adicionar um item à lista de tarefas
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => ( //aqui mapeia-se os itens da lista de tarefas e exibe-os na tela utilizando o map
            <li>{todoItem}</li> //aqui exibe-se cada item da lista de tarefas em um elemento <li> (item de lista)
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
