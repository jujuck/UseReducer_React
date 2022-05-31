import react, { useState } from 'react';
import tasks from './data/tasks';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoCard from './components/ToDoCard';

function App() {
  const [todos, setTodos] = useState(tasks);

  const addTask = (task) => {
    setTodos([...todos, task]);
  }

  return (
    <div className="App">
      <h1 className="text-center">My To Do List App for better learning</h1>
      <ToDoForm addTask={addTask} />
      <div className="container">
        {todos.map(task => <ToDoCard task={task} key={task.label} />)}
      </div>
    </div>
  )
}

export default App;
