import { Fragment } from "react";
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Teste" }]);
  const [inputTask, setInputTask] = useState('');
  
  const changeInput = (event) => {
    setInputTask(event.target.value)
    console.log(list)
  };
  const buttonClicked = () => {
    setList([...list ,{ id: uuid(), task: inputTask }])
  };

  return (
    <Fragment>
      <input onChange={changeInput} placeholder="Digite sua tarefa"></input>
      <button onClick={buttonClicked}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.task}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;