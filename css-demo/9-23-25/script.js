class Person 
{
    constructor(n) 
    {
        this.name = n;
    }

    sayHello() 
    {
        console.log("Hello, my name is " + this.name);
    }
}

//Instantiating an object from a class
let mike = new Person("Mike");
mike.sayHello(119);

//let stringersionOfMike = JSON.stringify(mike)
//console.log(stringersionOfMike)

//let mikeObject = JSON.parse(stringify(mike))
//console.log(stringVersionOfMike)

localStorage.setItem("user", "mike!", Math.random());
//console.log(localStorage.getItem("user - or whatever"));
//localStorage.setItem("user - or whatever", "mike!" + Math.random());

// function buttonClicked(e) 
//{
//    console.log("BUTTON CLICKED");
//  console.log(this) //shares the contact this is happening within
//}

let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", buttonClicked);

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext('2d');

myButton.addEventListener("click", (e) => 
    {
    console.log("BUTTON CLICKED");
    console.log(this);

    ctx.fillStyle = "#cccccc";
    //let x = Math.random() * 600;
    //let y = Math.random() * 400;
    //ctx.fillRect(x, y, 10, 75);
  
    }
)

let x = Math.random() * 600;
let y = Math.random() * 400;

function animationFunction() 
{
    ctx.fillStyle = "#cccccc";
    ctx.fillRect(0, 0, 600, 400)

    ctx.fillStyle = "#fa25f8";
    //let x = Math.random() * 600;
    //let y = Math.random() * 400; 
    x += 1;
    ctx.fillRect(x, y, 10, 75);
}

setInterval(animationFunction, 1000/60)


