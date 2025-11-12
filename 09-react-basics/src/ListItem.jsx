import {useState} from "react";

function ListItem(item) 
{
    return 
    (
        <li>
            {item.key}. {item.test} : {item.important}
        </li>
    )
}

export default ListItem