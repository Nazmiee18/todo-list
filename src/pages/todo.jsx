import React from 'react';
import TodoInput from '../components/todo-input';
import TodoFilter from '../components/todo-filter';
import TodoList from '../components/todo-list';

function Todo() {
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default Todo;
