## Have a look to the project
Start git clone and nom install on the workshop. You will install the package for the icons.
Then, have a look to the porject. We have a set of fake task in the data folder. 
In the `App.jsx`, we got two part. A first component `ToDoForm.jsx` in order to add a task to the list and a map on the data that display (`ToDoCard.jsx`) the task with three action icons.

You can watch the live coding solution step by step here https://drive.google.com/file/d/1TiFT2g0H73MniwTUMjivAxCKLAplHucv/view?usp=sharing

## Your goal
Using a reducer, you will update the state of the task
  - Adding a task with the data of the form
  - Removing a specific task from the list with the trash icon
  - Styling the text in green if a specific task is done with the done icon
  - Styling the text in yellow if a specific task is paused with the pause icon

## Let's start
- 1/ Add a useState for all the task in the `App.jsx` and consume it in your return
- 2/ Add a function to add a task from the form on the main state. Don't forget to pass this function with props to consume it inside your `ToDoForm.jsx`;
- 3/ Add a function to remove a task from the list when click on a specifi trash icon is done. For this, you can filter the actual list and only keep those which don't get the same label and description.
- 4/ Add or change a cls properties *.text-success* on the task in the state, when user is clicking on the icon and consume it on the specific task
- 5/ Add or change a cls properties *.text-warning* on the task in the state, when user is clicking on the icon and consume it on the specific task

All good but your code is quite long and you have now a lot of function to manage your state... Quite problematic if your project grow stronger

## Let's reorganize it with the help of useReducer
On this part, we will add a useReducer and prepare a ToDoReducer function to manage all the action on our state. We will reintégrate the action one after another. And then, at the end, we will change all the call of the function on the components. Ready !!!
- 1/ Add a function *todoReducer* and instantiate the react useReduer hook bellow.
```
const todoReducer = (state, action) => {
   console.log(state)
   console.log(action)
    switch (action.type) {
      case "":
        return [...state, action.payload];
      default:
        return state;
    }
 }
 const [todos, dispatch] = useReducer(todoReducer, tasks);
 ```

Remind: the function *todoReducer* accept two parameters, the first is the state and should not be provid when calling the function, and the second is a object with at least two key (type, payload)

- 2/ Add you first dispatch on the *addTask* function. Get your code of this function and place it in your first case in the *switch* of your *todoReducer*. The argument in the dispatch is an object with a type and a payload keys.
```
dispatch({ type: "ADD_TODO", payload: task })
```
- 3/ Do the same for the *deleteTask* function.
```
dispatch({ type: "REMOVE_TODO", payload: task })
```
- 4/ Do the same for the *setDone* function. In the switch, the return should send back the new state. Call the type 'ADD_CLS'. We will use it with the *pause*
- 5/ The difference between the *setDone* and the *setPause* is the class CSS. So just add a cls property in your dispatch object with the 'text-success' and consume it in the switch case.
```
const newToDo = [...state];
const index = newToDo.indexOf(action.payload)
newToDo[index].cls = action.cls;
return newToDo;
```
- 6/ Now reuse your case to implement the *setPause* function with a correct dispatch

All should be working back.
- 7/ Last step, write directly the dispatch function in the ToDoCard and ToDoFrom and pass it as props in the component. We don't need the intermediate methods anymore.

That's it. 

## Congrats
If you want, you can now make a new file with your full reducer and import it in your component in bonus.


