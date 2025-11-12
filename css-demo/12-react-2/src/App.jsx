import {browserRouter, Routes, Route, Link, BrowserRouter} from "react-router-dom";

import { useState, useEffect} from 'react'
import RandomPokemon from './RandomPokemon';
import Home from './Home';
import About from '/About';


function App() 
{
  console.log("Hello World");

  useEffect(()=>
    {
      console.log("in the effect");
    }, []) //use the function defined inside the curly brackets when the conditions in the array happen


  let hello = "hello!"

  let arr = [1, 2, 3, 4, 5, 6];

  //parenthesis means i'm in html
  return (
    //empty <> means a blank div in react
    //inside the {} you can write in javascript
    <> 
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/pokemon">Pokemon</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pokemon" element={<RandomPokemon/>}/>
        </Routes>
      </BrowserRouter>
        {hello}
        {arr.map((el, index) => 
          (
            <b  key={index}>{el} </b>
          ))}

          <RandomPokemon />
    </>
    
  )  
}

export default App
