import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/todo-provider';

function TodoInput() {
  const { todos, setTodos, todoInput, setTodoInput, isEdit, todoEdit, setIsEdit } = useContext(TodoContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (isEdit) {
      let cloneTodo = [...todos];
      let index = cloneTodo.findIndex((item) => item.id == todoEdit.id);
      cloneTodo[index].value = todoInput;

      setTodos(cloneTodo);
      setIsEdit(false);
    } else {
      let newTodo = {
        id: Math.random(),
        value: todoInput,
        status: false,
      };

      // console.log(newTodo);
      setTodos([...todos, newTodo]);
    }
    setTodoInput('');
  };

  return (
    <form className="flex">
      <input type="text" className="border border-black" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button className="p-2 border-solid border-black" onClick={handleClick}>
        {isEdit ? 'Edit' : 'Add'}
      </button>
    </form>
  );
}

export default TodoInput;
