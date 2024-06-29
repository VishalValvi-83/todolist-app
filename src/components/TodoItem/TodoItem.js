import React from 'react';
import './ToDoItem.css';
import Remove from './x-button.png'

function TodoItem({ toDoItem, index, deleteItem }) {

  return (
    <div className="todo-item">
      <div  className="task-info">
        <p>{toDoItem.task}</p>
        
      <img  src={Remove} alt='' className='remove-icon' onClick={()=>{
        deleteItem(index)
      }}/>
      </div>
      <span>
          <small>Added on: {toDoItem.dateAdded}</small> | 
          <small> Due: {toDoItem.dueDate}</small>
        </span>
    </div>
  );
}

export default TodoItem;