import "./Home.css"
import Subject from "./subject";
import {useState, useEffect} from "react";

//landing site, basic website navigation and thesis summary

function Home() 
{
    let data = "";
    useEffect(() => {
        fetch("http://localhost:3000/api/data")
        .then(result => result.json())
        .then(data => setFromServer(data))
    });

    //api sends the data from both json files in an array formatted [subjects, sources], this selects the correct data
    const subjectData = data[0];

    return (
        <>
        <div class="title-header">Queens in The Kingdom of Jerusalem</div>
        <div class="subject-container">
            {subjectData.map((subject) => (
                <Subject subject={subject} key={subject.id}></Subject>
            ))};
        </div>
        </>
    )
}

export default Home