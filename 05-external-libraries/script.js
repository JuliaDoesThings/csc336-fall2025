import Toastify from 'toastify-js';

let disappears = document.querySelectorAll(".disappers");

let taunts = 
    [
        Toastify({text: "Not that Simple!", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "You thought that would work?", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "You fool!", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "Trying that?", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "I cannot believe you thought this would work", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "LMAO", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "ha", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "HAHAHA", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "No really, it doesn't exist", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}}),
        Toastify({text: "Why?", duration: 2000, position: 'center', style: {background: rgba(228, 201, 128, 1)}})
    ];


function vanish(clicked) 
{
    let target = document.getElementById(clicked);
    target.style.display = "none";

    taunts[Math.floor(Math.random() * 10)].showToast();
}

function reset() 
{
    console.log("clicked reset");
    for (let i = 0; i < disappears.length; i++) 
    {
        //console.log(i + disappears[i]);
        disappears[i].style.display = "block";
    }
}
