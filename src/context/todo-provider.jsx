import { createContext, useState } from 'react';

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, value: 'Membuat Todo', status: false },
    { id: 2, value: 'makan', status: false },
    { id: 3, value: 'minum', status: false },
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [todoEdit, setTodoEdit] = useState({});

  const [isEdit, setIsEdit] = useState('');

  const [statusTodo, setStatusTodo] = useState('All');

  return <TodoContext.Provider value={{ todos, setTodos, todoInput, setTodoInput, todoEdit, setTodoEdit, isEdit, setIsEdit, statusTodo, setStatusTodo }}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
