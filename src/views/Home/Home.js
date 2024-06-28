import React, { useState } from 'react';
import TodoCard from '../../components/TodoItem/TodoItem';
import Clipboard from './Cipboard.svg'
import toast, { Toaster } from 'react-hot-toast';
import './Home.css';

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const clearTask = () => {
    console.log('Clear task button clicked!');
  };

  const AddTask = () => {
    
    if (newTask === "") {
      toast.error("Oops! Please enter a task 🤔.");
    }
    else if (todoList.find((item) => item.task === newTask)) {
      toast.error("Error: Task already exists. Try again!");
    }
    else if (newTask.length > 50) {
      toast.error("Task too long! Keep it under 50 characters.");
    }
    else if (newTask.length < 3) {
      toast.error("Task too short! Please enter at least 3 characters.");
    }
    else if (todoList.length >= 10) {
      toast.error('You have reached the maximum number of tasks!');
    }
    else {
      setTodoList([...todoList, newTask]);
      setNewTask('');
      toast.success("✨🎉 Great job! Your new task is ready to tackle!");

    };
  };

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
          value={newTask}
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
      <Toaster reverseOrder={false} />
    </div>
  );
};

export default Home;