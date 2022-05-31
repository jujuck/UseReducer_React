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
      case "REMOVE_TODO":
        return state.filter((todo) => todo.label !== action.payload.label && todo.description !== action.payload.description);
      case "ADD_CLS":
        const newToDo = [...state];
        const index = newToDo.indexOf(action.payload)
        newToDo[index].cls = action.cls;
        return newToDo;
      default:
        return state;
    }
  }
  const [todos, dispatch] = useReducer(todoReducer, tasks);

  const addTask = (task) => {
    dispatch({ type: "ADD_TODO", payload: task })
  }

  const deleteTask = (task) => {
    dispatch({ type: "REMOVE_TODO", payload: task })
  }

  const setDone = (task) => {
    dispatch({ type: "ADD_CLS", payload: task, cls: 'text-success' })
  }

  const setPause = (task) => {
    dispatch({ type: "ADD_CLS", payload: task, cls: 'text-warning' })
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
