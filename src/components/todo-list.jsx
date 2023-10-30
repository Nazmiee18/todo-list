import React, { useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TodoContext } from '../context/todo-provider';

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit, isDelete, setIsDelete } = useContext(TodoContext);

  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;

    setTodos([...cloneTodos]);
  };

  const handleEdit = (todo) => {
    setTodoEdit(todo);
    setTodoInput(todo.value);
    setIsEdit(true);
  };


  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-5">
          <span>
            <input type="checkbox" onClick={handleStatus} className={todo.status ? 'line-through' : ''} />
            {todo.value}
          </span>
          <div>
            <button onClick={() => handleEdit(todo)}>
              <FaEdit />
            </button>
            <button>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
