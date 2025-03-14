import React, { useState } from "react";

function ToDoItem(props) {
  const [isActive, setIsActive] = useState(true);

  function handleClick() {
    setIsActive((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={{ textDecoration: isActive ? "none" : "line-through" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
  //return <li style={{textDecoration: isActive ? "none" : "line-through" }} onClick={() => setIsActive(!isActive)} >{props.text}</li>;
}

export default ToDoItem;
