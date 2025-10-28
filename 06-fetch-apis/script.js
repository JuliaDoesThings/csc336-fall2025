let jokes = [];
let advice = [];
let setupSpot = document.getElementById("setup-div");
let punchlineSpot = document.getElementById("punchline-div");

let startButton = document.getElementById("start");
startButton.addEventListener("click", startConversation);

let humorButton = document.getElementById("humor-button");
humorButton.style.display = "none";
humorButton.addEventListener("click", showPunchline);

let dismissButton = document.getElementById("dismiss-button");
dismissButton.style.display = "none";
dismissButton.addEventListener("click", nextJoke);

let adviceButton = document.getElementById("advice-button");
adviceButton.style.display = "none";
adviceButton.addEventListener("click", adviceToggle);

//boolean to check which api we should be calling
let boredToggle = false;

async function getJoke() 
{
    if (boredToggle == false)
    {
        console.log("got joke");
        let jokePing = await fetch("https://official-joke-api.appspot.com/jokes/dad/random");
        let jokeData = await jokePing.json();

        // let jokeString = JSON.stringify(jokeData);
        //console.log(jokeData);
        console.log(jokeData[0]);
        console.log(typeof jokeData[0]);

        let jokeObject = jokeData[0];
        jokes.push(jokeObject)
    }
    else
    {
        console.log("got advice");
        let boredPing = await fetch("https://api.adviceslip.com/advice");
        let boredData = await boredPing.json();

        console.log(boredData.slip);
        console.log("logged slip");
        advice.push(boredData.slip);
        console.log(advice)
        
    }
    //jokes.push(jokeObject);
    //console.log(jokes[jokes.length -1].punchline);
}

function nextJoke(e) 
{
    getJoke();

    punchlineSpot.style.display = "none";
    if (boredToggle == false) 
    {
        let newJoke = jokes[jokes.length - 1];

        setupSpot.innerHTML = newJoke.setup;
        punchlineSpot.innerHTML = newJoke.punchline;
    }
    else 
    {
        let newResponse = advice[advice.length - 1];
        setupSpot.innerHTML = newResponse.advice;

        dismissButton.innerHTM = "More Advice";
        console.log(advice);
    }
    dismissButton.innerHTML = "Dismiss";
}

function showPunchline(e) 
{
    punchlineSpot.style.display = "block";
    dismissButton.innerHTML = "Next";
}


function startConversation(e) 
{
    getJoke();
    
    startButton.style.display = "none";
    humorButton.style.display = "block";
    dismissButton.style.display = "block";
    adviceButton.style.display = "block";
    let topText = document.getElementById("prompt-heading");

    if (boredToggle == false)
    {
        console.log(jokes[0]);
        setupSpot.innerHTML = jokes[0].setup;
        punchlineSpot.style.display = "none";
        punchlineSpot.innerHTML = jokes[0].punchline;
        topText.innerHTML = "Your Dad starts a joke..."
    }
    else
    {
        console.log(advice[0]);
        setupSpot.innerHTML = advice[0].advice;

        topText.innerHTML = "Your Dad provides some advice..."
    }
}

function adviceToggle() 
{
    if (boredToggle == false) 
    {
        toAdvice();
    }
    else 
    {
        toJoke();
    }
}

async function toAdvice() 
{
    boredToggle = true;
    await getJoke();
    
    console.log(advice);
    console.log("len " + advice.length - 1);
    setupSpot.innerHTML = advice[advice.length - 1].advice;
    adviceButton.innerHTML = "Back to Jokes";
}

async function toJoke() 
{
    boredToggle = false;
    await getJoke();

    console.log(jokes);
    console.log("len " + jokes.length - 1);
    setupSpot.innerHTML = jokes[jokes.length - 1].setup;
    punchlineSpot.innerHTML = jokes[jokes.length - 1].punchline;
    adviceButton.innerHTML = "I Need Advice";
}

getJoke();
