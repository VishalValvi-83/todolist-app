import React from 'react'

function TodoItem({toDoItem}) {
  return (
    <div className="todo-item"> <p> <input type="checkbox" />{toDoItem}</p>
    </div>
  )
}

export default TodoItem