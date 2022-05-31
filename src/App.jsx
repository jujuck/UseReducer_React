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

  return (
    <div className="App">
      <h1 className="text-center">My To Do List App for better learning</h1>
      <ToDoForm dispatch={dispatch} />
      <div className="container">
        {todos.map(task => <ToDoCard task={task} key={task.label} dispatch={dispatch} />)}
      </div>
    </div>
  )
}

export default App;
