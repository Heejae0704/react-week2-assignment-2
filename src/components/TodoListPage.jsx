import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function TodoListPage({ todoItems, onAddTodo, onClickComplete }) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onAddTodo={onAddTodo} />
      <TodoList todoItems={todoItems} onClickComplete={onClickComplete} />
    </div>
  );
}