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
