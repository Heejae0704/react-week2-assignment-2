import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import EmptyTodo from './EmptyTodo';

import uuidv4 from '../utils/uuidv4';

export default function App() {
  const [todoInput, setTodoInput] = useState({
    id: '',
    text: '',
  });
  const [todos, setTodos] = useState([]);

  function handleChangeTodoInput(e) {
    const { value } = e.target;

    setTodoInput({
      id: uuidv4(),
      text: value,
    });
  }

  function handleAddTodoList(e) {
    e.preventDefault();

    setTodos([...todos, todoInput]);
    setTodoInput({
      id: '',
      text: '',
    });
  }

  function handleCompleteTodoList(todoListId) {
    setTodos(todos.filter((todo) => todo.id !== todoListId));
  }

  return (
    <div>
      <p>To-do</p>
      <TodoInput
        onChange={handleChangeTodoInput}
        onSubmit={handleAddTodoList}
        todoInput={todoInput}
      />
      <div style={{ marginTop: '20px' }}>
        <TodoLists todos={todos} onClick={handleCompleteTodoList} />
      </div>
    </div>
  );
}
