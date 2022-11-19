import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleInput = (e)=>{
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ? 'you need js skills': null;

        setTodo(inputValue);
        setWarning(updatedWarning);
    };
  return (
    <div>
      <h4>Use State Hook</h4>
      <hr />
        <p>{todo}</p>
        <p><textarea name="todo" id="" cols="30" rows="5" value={todo} onChange={handleInput}></textarea></p>
        <hr />
        <h2>{warning || "good choice!"}</h2>
    </div>
  )
}

export default Todo