let button = document.querySelector("#callbackDemoButton");

//function clickEventHappened(e) 
//{
//    console.log("Clicked!");   
//}

//button.addEventListener("click", (e) => {console.log("Clicked!") });

//button.addEventListener("click", clickEventHappened);

/*    function doSomething(numTimes) 
    {
        let sum = 0;
        for (let i = 0; i < numTimes; i++) 
        {
            setInterval += 1 * numTimes / 4;
        }
        return sum;

    }

    let result = doSomething(100);
    console.log(result);
*/

/*let dogRequest = fetch("https://dog.ceo/api/breeds/image/random");

//dogRequest.then((response) => {console.log(response) })
dogRequest
    .then( (dogResponse) => {return dogResponse.json() })
    .then( (dogData) => 
        {
            let timePassed = Date.now() - beforeRequest;
            console.log(`It took ${timePassed} for the restest`);
            console.log(dogData) 

            let dogImageHTML = document.createElement("img");
            dogImageHTML.width = 200;
            dogImageHTML.src = dogData.message;
            document.querySelector("#dogDiv").appendChild(dogImageHTML);
        })
    .catch (() => console.log("someting went wrong"));
*/
let beforeRequest = Date.now();

async function getAndDisplayDogImage() 
{
    let dogResponse = await fetch("https://dog.ceo/api/breeds/image/random"); //must be in async. waits for response.
    let dogData = await dogResponse.json();

    let timePassed = Date.now() - beforeRequest;
    console.log(`It took ${timePassed} for the restest`);
    console.log(dogData) 
    let dogImageHTML = document.createElement("img");
    dogImageHTML.width = 200;
    dogImageHTML.src = dogData.message;
    document.querySelector("#dogDiv").appendChild(dogImageHTML);

}

getAndDisplayDogImage()
