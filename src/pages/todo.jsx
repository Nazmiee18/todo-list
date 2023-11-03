import React from 'react';
import TodoInput from '../components/todo-input';
import TodoList from '../components/todo-list';

function Todo() {
  return (
    <div className="grid place-items-center mx-auto relative top-40 w-[50vw] p-10">
      <h1 className="font-bold text-2xl my-3">What's the plan for today?</h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default Todo;
