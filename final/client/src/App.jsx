import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import {useState} from 'react';
import Home from './Home';
import Sources from './Sources';
import './App.css';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <nav>
            <NavLink to="/" class="homepage-link">Home</NavLink>
            <NavLink to="/sources" class="sources-link">Sources</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="sources" element={<Sources/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
