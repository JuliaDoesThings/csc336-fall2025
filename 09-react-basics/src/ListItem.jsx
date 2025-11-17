import {useState} from "react";
import "./ListItem.css";

function ListItem(item) 
{
    console.log(item)
    return (
        
        <li style={{fontWeight: item.important ? "bold" : "normal"}}>
            {item.index}. 
            Assignment: {item.name} <br/>
            Class: {item.class} <br/>
            Due: {item.due} <br/>
            
        </li>
    )
}

export default ListItem