import react, { useReducer } from 'react';
import tasks from './data/tasks';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoCard from './components/ToDoCard';

function App() {
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.data];
      case 'REMOVE_TASK':
        return state.filter(todo => todo.label !== action.data.label && todo.description !== action.data.description);
      case 'ADD_CLS_TASK':
        const newTodos = [...state];
        const index = newTodos.indexOf(action.data);
        newTodos[index].classe = action.cls;
        return newTodos;
      default:
        return state;
    }
  }
  const [todos, dispatch] = useReducer(todoReducer, tasks)

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
