var cards = document.querySelectorAll(".info-card");
var queensCards = [cards[2], cards[7]];

let showAllButton = document.querySelector(".show-all-button")
let womenButton = document.querySelector(".women-button")

let posTracker = 0;
console.log("contains " + cards.length);


for (i = 1; i < cards.length; i++) 
{
    cards[i].style.display = "none"
}
showAllButton.style.display = "none"

let nextCount = 0;
let prevCount = 0;

function girlsMode(e) 
{
    let labels = document.querySelectorAll(".card-label") 
    console.log("selected " + labels.length + " labels")
    for (i = 0; i < labels.length; i++)
    {
        labels[i].style.borderTop = "2px solid pink";
        labels[i].style.borderLeft = "2px solid pink";
        labels[i].style.borderRight = "2px solid pink";
        labels[i].style.backgroundColor = "lavenderblush";
    }
    let tables = document.querySelectorAll(".info-card-hidden")
    for (i = 0; i < labels.length; i++) 
    {
        tables[i].style.backgroundColor = "lavenderblush";
    }

    let boxesLeft = document.querySelectorAll(".table-left")
    let boxesRight = document.querySelectorAll(".table-right")
    for (i = 0; i < boxesLeft.length; i++) 
    {
        boxesLeft[i].style.borderRight =  "2px solid pink";
        boxesLeft[i].style.borderTop =  "3px solid pink";

        boxesRight[i].style.borderLeft =  "2px solid pink";
        boxesRight[i].style.borderTop =  "3px solid pink";
    }

    for (i = 0; i < cards.length; i++) 
    {
        cards[i].style.display = "none";
        cards[i].style.backgroundColor = "lavenderblush";
        cards[i].style.border = "2px solid pink";
    }
    document.body.style.backgroundColor = "plum";

    womenMode = true;
    posTracker = 0;

    cards = queensCards
    console.log("queens contains " + cards.length);

    cards[0].style.display = "block";
    showAllButton.style.display = "block"
    womenButton.style.display = "none"
}

function toDefaults(e) 
{
    document.body.style.backgroundColor = "paleturquoise";
    posTracker = 0;
    cards = document.querySelectorAll(".info-card");

    let labels = document.querySelectorAll(".card-label") 
    console.log("selected " + labels.length + " labels")
    for (i = 0; i < labels.length; i++)
    {
        labels[i].style.borderTop = "2px solid green";
        labels[i].style.borderLeft = "2px solid green";
        labels[i].style.borderRight = "2px solid green";
        labels[i].style.backgroundColor = "cornflowerblue";
    }

    let tables = document.querySelectorAll(".info-card-hidden")
    for (i = 0; i < labels.length; i++) 
    {
        tables[i].style.backgroundColor = "cornflowerblue";
    }

    let boxesLeft = document.querySelectorAll(".table-left")
    let boxesRight = document.querySelectorAll(".table-right")
    for (i = 0; i < boxesLeft.length; i++) 
    {
        boxesLeft[i].style.borderRight =  "2px solid green";
        boxesLeft[i].style.borderTop =  "3px solid green";

        boxesRight[i].style.borderLeft =  "2px solid green";
        boxesRight[i].style.borderTop =  "3px solid green";
    }

    for (i = 0; i < cards.length;  i++) 
    {
        cards[i].style.display = "none";
        cards[i].style.backgroundColor = "cornflowerblue;";
        cards[i].style.borderColor = "green"; 
    }

    console.log("cards conatins " + cards.length)
    cards[0].style.display = "block;"
    showAllButton.style.display = "none"
    womenButton.style.display = "block"
}

function nextItem(e) 
{

    let current = cards[posTracker];

    if (posTracker == cards.length - 1)
    {
        posTracker = -1;
    }
    let next = cards[posTracker + 1];

    current.style.display = "none";
    next.style.display = "block";
        
    posTracker += 1;
    //console.log("displaying " + posTracker);

    nextCount += 1;
    console.log("next count: " + nextCount + " pos: " + posTracker)
    
}

function prevItem(e) 
{
    let current = cards[posTracker];

    if (posTracker == 0) 
    {
        posTracker = cards.length;
    }

    let prev = cards[posTracker - 1];

    current.style.display = "none";
    prev.style.display = "block";

    posTracker -= 1;

    prevCount += 1;
    console.log("prev count: " + prevCount + " pos: " + posTracker)
}