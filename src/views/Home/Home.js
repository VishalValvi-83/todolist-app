import React, { useState } from 'react';
import TodoCard from './../../components/TodoItem/TodoItem';
import Clipboard from './Cipboard.svg'
import './Home.css';

const Home = () => {
  const [todoList, setTodoList] = useState([
    "complete assignments",
    "Go to Farmhouse",
  ]);


  return (
    <div className='Container'>
      <div className='heading'><h2>ToDo LIST </h2>
        <img src={Clipboard} alt=' '/></div>
      <blockquote>
        "<u>BELIEVE</u> you can and you're halfway there." - Theodore Roosevelt
      </blockquote>
      <div className="action-container">
        <input
          type="text"
          id="task-input"
          placeholder="Add Your New Task"
      
        />
        <button >Add Task</button>
        <button id="delBtn">Remove Task</button>
      </div>
      <div className="list-container" id="list-container">
        {(todoList.map((toDoItem, i) => (<TodoCard key={i} toDoItem={toDoItem} ></TodoCard>)))}
      </div>
    </div>
  );
};

export default Home;