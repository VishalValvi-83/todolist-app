import React from 'react'
import './ToDoItem.css'

function TodoItem({ toDoItem }) {
  return (
    <div className="todo-item"> <p> <input type="checkbox" />{toDoItem.task}</p>
      <span>Added on: {toDoItem.dateAdded} <br /> Due: {toDoItem.dueDate}</span>
    </div>
  )
}

export default TodoItem