import react, { useState, useReducer } from 'react';
import tasks from './data/tasks';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoCard from './components/ToDoCard';

function App() {
  const todoReducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      default:
        return state;
    }
  }
  const [todos, dispatch] = useReducer(todoReducer, tasks);

  const addTask = (task) => {
    dispatch({ type: "ADD_TODO", payload: task })
  }

  const deleteTask = (task) => {
    setTodos(todos.filter(todo => todo.label !== task.label && todo.description !== task.description))
  }

  const setDone = (task) => {
    const newToDo = [...todos];
    const index = newToDo.indexOf(task)
    newToDo[index].cls = 'text-success';
    setTodos(newToDo);
  }

  const setPause = (task) => {
    const newToDo = [...todos];
    const index = newToDo.indexOf(task)
    newToDo[index].cls = 'text-warning';
    setTodos(newToDo);
  }

  return (
    <div className="App">
      <h1 className="text-center">My To Do List App for better learning</h1>
      <ToDoForm addTask={addTask} />
      <div className="container">
        {todos.map(task => <ToDoCard task={task} key={task.label} deleteTask={deleteTask} setDone={setDone} setPause={setPause} />)}
      </div>
    </div>
  )
}

export default App;
