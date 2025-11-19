import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import {useState} from "react";
import ToDoList from "./ToDoList";
import Home from "./Home";
import Affirmations from "./Affirmations";
import "./App.css"


//this runs by default returns at the end of the day, will return an html object
function App() 
{
  return (
    <>
      <BrowserRouter>
        <nav>
          <table>
            <tbody>
              <tr>
                <td><NavLink to="/" class="homepage-link">Home</NavLink>  </td>
                <td><NavLink to="/affirmation" class="homepage-link">Affirmations</NavLink>  </td>
                <td><NavLink to="/todo" class="homepage-link">To-Do List</NavLink>  </td>
              </tr>
            </tbody>
          </table>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="affirmation" element={<Affirmations/>}/>
          <Route path="todo" element={<ToDoList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App