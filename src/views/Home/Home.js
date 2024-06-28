import React, { useState } from 'react';
import TodoCard from './../../components/TodoItem/TodoItem';
import Clipboard from './Cipboard.svg'
import './Home.css';

const Home = () => {
  const [todoList, setTodoList] = useState([  ]);
  const [newTask, setNewTask] = useState('');

  const clearTask = () => {
    console.log('Clear task button clicked!');
  };
  const AddTask = () => {
    setTodoList([...todoList, newTask]);
    setNewTask('');
  }
  return (
    <div className='Container'>
      <div className='heading'><h2>ToDo LIST </h2>
        <img src={Clipboard} alt=' ' /></div>
      <blockquote>
        "<u>BELIEVE</u> you can and you're halfway there." - Theodore Roosevelt
      </blockquote>
      <div className="action-container">
        <input
          type="text"
          id="task-input"
          placeholder="Add Your New Task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={AddTask}>Add Task</button>
        <button onClick={clearTask} id="delBtn">Remove Task</button>
      </div>
      <div className="list-container" id="list-container">
      {todoList.length === 0 ? (
          <p className="empty-list-text" >"Turn ideas into actions, add a task!"
          </p>
        ) : (
          todoList.map((toDoItem, i) => (
            <TodoCard key={i} toDoItem={toDoItem} >
            </TodoCard>
          )))}
      </div>
    </div>
  );
};

export default Home;