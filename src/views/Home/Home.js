import React, { useEffect, useState } from 'react';
import TodoCard from '../../components/TodoItem/TodoItem';
import Clipboard from './Cipboard.svg'
import toast, { Toaster } from 'react-hot-toast';
import './Home.css';
import Swal from 'sweetalert2';

const Home = () => {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
   if(todoList.length === 0) return
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList]);

  
  function deleteItem(index) {
    Swal.fire({
      title: 'WARNING!!!',
      text: "Are you sure you want to delete this task?",
      icon: 'warning',
      showCancelButton: true,
    }).then((result)=> {
      if(!result.isConfirmed){
        return
      }
      const newTodoList = todoList.filter((item, i) => i !== index)
      setTodoList(newTodoList);
    })
   
  }

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
      const currentDate = new Date();
      const dueDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      const taskWithDate = {
        task: newTask,
        dateAdded: currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString(),
        dueDate: dueDate.toLocaleDateString() + " " + dueDate.toLocaleTimeString()
      };
      setTodoList([...todoList, taskWithDate]);
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
      </div>
      <div className="list-container" id="list-container">
        {todoList.length === 0 ? (
          <p className="empty-list-text" >"Turn ideas into actions, add a task!"
          </p>
        ) : (
          todoList.map((toDoItem, i) => (
            <TodoCard key={i} index={i} toDoItem={toDoItem} deleteItem={deleteItem} >
            </TodoCard>
          )))}
      </div>
      <Toaster reverseOrder={false} />
    </div>
  );
};

export default Home;