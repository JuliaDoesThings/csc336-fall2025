const fs = require("fs"); // Imort libray using "CommonJS" (fs = file system)

console.log("Hello node!")

let randomNumbers = [];

//Read "randomNumbers.txt"
let fileContents = fs.readFileSync("./randomNumbers.txt")

for (i = 0; i < 10; i++) 
    {
        let rand = Math.random();
        randomNumbers[i] = rand;
        console.log(randomNumbers[i])
    }


let str = "";
for (let rand of randomNumbers) 
    {
        str += rand + "\n"
    }
fs.writeFileSync("randomNumbers.txt", str); //write file synchronously