import React from 'react';
import _ from 'lodash';

import TodoList from './TodoList';
import EmptyTodo from './EmptyTodo';

export default function TodoLists({ todos, onClickAddTask }) {
  if (_.isEmpty(todos)) {
    return <EmptyTodo />;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoList
          key={todo.id}
          todo={todo}
          order={index + 1}
          onClickAddTask={onClickAddTask}
        />
      ))}
    </div>
  );
}