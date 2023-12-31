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
    <form className="flex my-3">
      <input type="text" placeholder="Input your todo" className="input input-bordered w-full max-w-xs" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button className="px-5 ml-3 border border-solid border-black rounded-md btn btn-active btn-info" onClick={handleClick}>
        {isEdit ? 'Edit' : 'Add'}
      </button>
    </form>
  );
}

export default TodoInput;
