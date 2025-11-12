import {useState} from "react";


//useState(default value of the array)
//returns an array that should be treated as read only and a method that can be used to modify it
const [items, setItems] = useState
(
  [
    {
      name: "Capstone Outline and Introduction",
      class: "History Capstone", 
      due: "Sunday the 16th",
      important: true
    },
    {
      name: "Ucertify",
      class: "Secure Software Development",
      due: "Friday the 14th",
      important: true
    },
    {
      name: "Reading Response 9",
      class: "Ancient Greece",
      due: "Friday the 14th",
      important: false     
    },
    {
      name: "Web Dev Assignment 10",
      class: "Web Development",
      due: "Tuesday the 18th",
      important: true
    }
  ]
);

const [meetings, setMeetings] = useState(
  [
    {
      date: "Wednesday the 12th",
      time: "11 am",
      
    }    
  ])
const [inputValue, setInputValue] = useState("")


//this runs by default returns at the end of the day, will return an html object
function App() 
{
  let highPriority = []
  let lowPriority = []
  for (let i = 0; i < items.length; i++) 
  {

  }

  function handleAdd() 
  {
  setItems([...items, {text: inputValue, important: false}]);
  setInputValue("");
  }


  return 
  (
    <div>
        {items.map((items, index) => (
          <ListItem 
            key={index} 
            text={items.text} 
            important={items.important}>
          </ListItem>))}

          <input id="newItemText" type="text"></input>
          <label for="newItemText">New Item:</label>
          <button onclick="handleAdd()">Add to List</button>
    </div>
  )
}



export default App