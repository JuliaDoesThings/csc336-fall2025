import {useState} from "react";
import ListItem from "./ListItem";
import Meeting from "./Meeting";
import "./App.css";

//this runs by default returns at the end of the day, will return an html object
function App() 
{
  //useState(default value of the array)
  //returns an array that should be treated as read only and a method that can be used to modify it
  const [items, setItems] = useState(
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
  ]);

  const [meetings, setMeetings] = useState(
  [
    {
      date: "Wednesday the 12th",
      time: "11:00 am",
      with: "Privacy Research Project Group",
      purpose: "Secure Software Development Class",
      notes: "Prep slides beforehand"
      
    },  
    {
      date: "Thursdat the 13th",
      time: "3:00 pm",
      with: "Professor Godwin",
      purpose: "Software Engineering Class",
      notes: "Skills 4, Email resume before"
    }  
  ]);

  const [itemName, setItemName] = useState("")
  const [className, setClassName] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [importance, setImportance] = useState("")

  function addItem() 
  //name, class, due, important
  {
    setItems([...items, {name: itemName, class: className, due: dueDate, important: importance}]);
    setItemName("");
    setClassName("");
    setDueDate("");
    setImportance("");
  }


  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingWith, setMeetingWith] = useState("");
  const [meetingPurpose, setMeetingPurpose] = useState("");
  const [meetingNotes, setMeetingNotes] = useState("");

  function addMeeting() 
  //date, time, with, purpose, notes
  {
    setMeetings([...meetings, {date: meetingDate, 
                  time: meetingTime, 
                  with: meetingWith, 
                  purpose: meetingPurpose, 
                  notes: meetingNotes}]);

    setMeetingDate("");
    setMeetingTime("");
    setMeetingWith("");
    setMeetingPurpose("");
    setMeetingNotes("");
  }

  return  (
    <table>
      <tbody>
      <tr>
        <td>
          <div>
              {items.map((items, index) => (
                <ListItem 
                  index={index + 1}
                  name={items.name} 
                  class={items.class} 
                  due={items.due}
                  important={items.important}>
                </ListItem>))}
          </div>
        </td>
        <td>
          <div>
              {meetings.map((meetings) => (
                <Meeting
                  date={meetings.date}
                  time={meetings.time}
                  with={meetings.with}
                  purpose={meetings.purpose}
                  notes={meetings.notes}>
                </Meeting>))}
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div id="add-item">
            <label for="item-name">Name: </label>
            <input
              type="text"
              value={itemName}
              id="item-name"
              onChange={(e) => setItemName(e.target.value)}/> <br/>

            <label for="item-class">Class:    </label> 
            <input 
              type="text"
              value={className}
              id="item-class"
              onChange={(e) => setClassName(e.target.value)}/> <br/>

            <label for="item-due">Due Date: </label> 
            <input 
              type="text"
              value={dueDate}
              id="item-due"
              onChange={(e) => setDueDate(e.target.value)}/> <br/>

            <button onClick={addItem} id="add-item-button">Add to List</button>
          </div>
        </td>
        <td>
          <div id="add-meeting">
            <label for="meeting-date">Date: </label>
            <input
              type="text"
              value={meetingDate}
              id="meeting-Date"
              onChange={(e) => setMeetingDate(e.target.value)}/> <br/>

            <label for="meeting-time">Time:    </label> 
            <input 
              type="text"
              value={meetingTime}
              id="meeting-time"
              onChange={(e) => setMeetingTime(e.target.value)}/> <br/>

            <label for="meeting-with">With: </label> 
            <input 
              type="text"
              value={meetingWith}
              id="meeting-with"
              onChange={(e) => setMeetingWith(e.target.value)}/> <br/>

            <label for="meeting-purpose">Purpose: </label>
            <input
              type="text"
              value={meetingPurpose}
              id="meeting-purpose"
              onChange={(e) => setMeetingPurpose(e.target.value)}/> <br/>

            <label for="meeting-notes">Add Meeting Notes: </label>
            <input
              type="text"
              value={meetingNotes}
              id="meeting-notes"
              onChange={(e) => setMeetingNotes(e.target.value)}/> <br/>

            <button onClick={addItem} id="add-item-button">Add to List</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

      
      //date, time, with, purpose, notes

    //<input id="newItemText" type="text"></input>
    //<label for="newItemText">New Item:</label>
    //<button onclick="handleAdd()">Add to List</button>

    /*        <label for="item-importance">Important: </label>
      <input 
              type="checkbox"
              value="important"
              id="item-importance"
              onChange={(e) => 
                {if (e.target.value == "important") 
                  {
                    setImportance(true)
                  }
                  else 
                  {
                    setImportance(false)
                  }
                }
              }/>
    */
  )
}

export default App