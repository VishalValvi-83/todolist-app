import React from 'react';
import './ToDoItem.css';

function TodoItem({ toDoItem }) {
  return (
    <div className="todo-item">
      <div className="checkbox-container">
        <input type="checkbox" />
      </div>
      <div className="task-info">
        <p>{toDoItem.task}</p>
        <span>
          <small>Added on: {toDoItem.dateAdded}</small> | 
          <small> Due: {toDoItem.dueDate}</small>
        </span>
      </div>
    </div>
  );
}

export default TodoItem;