import {useState} from 'react';
import "./Meeting.css";

function Meeting(item) 
{
    //console.log(item)
    return (
        <li class="meeting-li">
            {item.date} at {item.time} <br/>
            With: {item.with} <br/>
            {item.purpose} <br/>
            Notes: <br/>
            <p class="meeting-notes"> {item.notes} <br/></p>
        </li>
    )
}

export default Meeting