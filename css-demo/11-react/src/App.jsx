import {useState} from 'react';
import TodoItem from "./TodoItem";
import TodoJSON from "./data.json";

function App() 
{
  function addTask() 
  {
    let newTodo = 
    {
      task: task,
      completed: false,
      id: Date.now()
    }
    setTodos(...todos, newTodo)
    setTask("")
  }

  // Function to add a new todo to the list
  function addTodo() {
    // Create a new todo object with the current task value
    let newTodo = {
      task: task,
      complete: false, 
      id: Date.now()    // Generate a unique ID using current timestamp
    }
    // SPREAD OPERATOR (...todos):
    // Creates a new array containing all existing todos, then adds newTodo
    // We must create a new array (not modify the old one) because React needs to detect changes
    // [1, 2, 3] becomes [1, 2, 3, newTodo] - keeps all old items, adds the new one
    setTodos([...todos, newTodo]);
    // Clear the input field by resetting task to empty string
    setTask("");
  }

  //const [x, setX] = useState(10);
  //const [name, setName] = useState("Mike");

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([TodoJSON])

  return  (
    <div>
      <input
        type="test"
        onChange={e => setTask(e.target.value)}
      />

      <ul
        //two curly braces!
        //outer {} = "this is javascript in jsx"
        //inner {} = this is an object
        //style={{}}
      >
        {todos.map((todo) =>
          (
            <TodoItem todo={todo} key={todo.id}/>
          ))};
      </ul>
    </div>
  );
}



export default App
