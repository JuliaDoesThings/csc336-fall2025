import {useState} from 'react';

function TodoItem(todo) 
{
    return (
        <li style={{textDecoration: todo.complete ? "line-through" : "none"}}> 
            {todo.task} 
        </li>
    )
}

export default TodoItem