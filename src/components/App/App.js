import React, { useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      created: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const deletedAllTask = () => {
    setTasks([]);
  };

  const taskCompletion = (id) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  const updateTaskDescription = (id, newDescription) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, description: newDescription } : task));
    setTasks(updatedTasks);
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'Active':
        return tasks.filter((task) => !task.completed);
      case 'Completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <section className="todoapp">
      <Header onAddTask={addTask} />
      <section className="main">
        <TaskList
          onDeleteTask={deleteTask}
          onTaskCompletion={taskCompletion}
          onUpdateTask={updateTaskDescription}
          tasks={getFilteredTasks()}
        />
        <Footer
          onDeletedAllTask={deletedAllTask}
          currentFilter={filter}
          onFilterChange={setFilter}
          tasksLeft={tasks.filter((task) => !task.completed).length}
        />
      </section>
    </section>
  );
};

export default App;