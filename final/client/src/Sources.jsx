import Profile from "./Profile"
import "./Sources.css"
import {useState, useEffect} from "react";

//webpage landing for source hosting

function Sources() 
{
    let data = "";
    useEffect(() => {
        fetch("http://localhost:3000/api/data")
        .then(result => result.json())
        .then(data => setFromServer(data))
    })
    
    //api sends the data from both json files in an array formatted [subjects, sources], this selects the correct data
    const sourcesData = data[1];

    return (
        <>
            <div class="subject-container">
                {sourcesData.map((source) => (
                    <Profile source={source} key={source.id}/>
                ))};
            </div>

            
        </>
    )
}

export default Sources