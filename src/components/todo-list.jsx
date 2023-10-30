import React, { useContext, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TodoContext } from '../context/todo-provider';

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit, statusTodo, setStatusTodo } = useContext(TodoContext);

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

  const handleDelete = (deleted) => {
    const todo = [...todos];
    const filteredTodoAfterDelete = todo.filter((todo) => todo.id !== deleted);
    setTodos(filteredTodoAfterDelete);
  };

  useEffect(() => {
    console.log(statusTodo);
  }, [statusTodo]);

  return (
    <div>
      <div>
        <button onClick={() => setStatusTodo('All')}>All</button>
        <button onClick={() => setStatusTodo('Active')}>Active</button>
        <button onClick={() => setStatusTodo('Completed')}>Completed</button>
      </div>
      {statusTodo === 'All' ? (
        todos.map((todo, index) => (
          <div key={todo.id} className="flex gap-5">
            <span onClick={() => handleStatus(index)} className={todo.status ? 'line-through' : ''}>
              {todo.value}
            </span>
            <div>
              <button onClick={() => handleEdit(todo)}>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(todo.id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      {statusTodo === 'Active' ? (
        todos
          .filter((todoActive) => !todoActive.status)
          .map((todo, index) => (
            <div key={todo.id} className="flex gap-5">
              <span onClick={() => handleStatus(index)} className={todo.status ? 'line-through' : ''}>
                {todo.value}
              </span>
              <div>
                <button onClick={() => handleEdit(todo)}>
                  <FaEdit />
                </button>
                <button>
                  <FaTrash onClick={() => handleDelete(todo.id)} />
                </button>
              </div>
            </div>
          ))
      ) : (
        <></>
      )}
      {statusTodo === 'Completed' ? (
        todos
          .filter((todoActive) => todoActive.status)
          .map((todo, index) => (
            <div key={todo.id} className="flex gap-5">
              <span onClick={() => handleStatus(index)} className={todo.status ? 'line-through' : ''}>
                {todo.value}
              </span>
              <div>
                <button onClick={() => handleEdit(todo)}>
                  <FaEdit />
                </button>
                <button>
                  <FaTrash onClick={() => handleDelete(todo.id)} />
                </button>
              </div>
            </div>
          ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default TodoList;
