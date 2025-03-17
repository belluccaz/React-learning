import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

//me explique esse projeto, os códigos dos componentes e o que cada um faz
//O projeto é um bloco de notas onde você pode adicionar e deletar notas.
//O App é o componente principal que renderiza todos os componentes, ele tem um estado que é um array de objetos com as notas.
//O Header é o componente que renderiza o header da aplicação.
//O Footer é o componente que renderiza o footer da aplicação.
//O Note é o componente que renderiza as notas, ele recebe como props o id, o title, o content e uma função para deletar a nota.
//O CreateArea é o componente que renderiza a área onde você pode adicionar uma nova nota, ele tem um estado que é um objeto com o title e o content da nota.
//O CreateArea tem um handleChange que atualiza o estado do title e do content, e um handleClick que passa o title e o content para o App.

//me explique o que cada um dos métodos do app faz
//O método addNote recebe um novoNote e adiciona ele ao array de notes.
//O método deleteNote recebe um id e filtra o array de notes para remover a nota com o id passado.

//me explique o que cada um dos métodos do note faz
//O método handleClick chama a função deleteNote passada como props com o id da nota.

//me explique o que cada um dos métodos do createarea faz
//O método handleChange recebe um event e atualiza o estado do title e do content com o valor do event.
//O método handleClick chama a função passada como props com o title e o content atualizados.

//me explique o que cada um dos métodos do footer faz
//O método getYear retorna o ano atual.
//O método getDay retorna o dia atual.

//me explique o que cada um dos métodos do header faz
//O método getHour retorna a hora atual.
//O método getMinute retorna o minuto atual.

//me explique o que cada um dos métodos do note faz
//O método handleClick chama a função deleteNote passada como props com o id da nota.

//me explique o que cada um dos métodos do app faz
//O método addNote recebe um novoNote e adiciona ele ao array de notes.
//O método deleteNote recebe um id
