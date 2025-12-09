import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import {useState} from 'react';
import Home from './Home';
import Sources from './Sources';
import Papers from "./Papers";
import './App.css';

function App() {

  const [fromServer, setFromServer] = useState("");

  useEffect(() => {
    fetch("http://localhost:300-/api/data")
    .then(result => result.json())
    .then(data => setFromServer(data))
  })

  return (
    <>
      <div>
        <BrowserRouter>
          <nav>
            <table class="top-bar">
              <tbody>
                <td class="nav-col"><NavLink to="/" class="homepage-link">Home</NavLink></td>
                <td class="nav-col"><NavLink to="/sources" class="sources-link">Sources</NavLink></td>
                <td class="nav-col"><NavLink to="/papers" class="papers-link">Papers</NavLink></td>
              </tbody>
            </table>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="sources" element={<Sources/>}></Route>
            <Route path="papers" element={<Papers/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
