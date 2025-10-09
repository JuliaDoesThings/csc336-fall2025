const fs = require("fs");

let programCount = 0;

try 
{
    let fileContents = fs.readFileSync("program_count.txt", "utf-8");
    console.log(fileContents);
    programCount = JSON.parse(fileContents);
} catch(error) 
{
    console.log("Error happened! Probably because the file dones't exist.")
    fs.writeFileSync("program_count.txt", JSON.stringify(programCount));
}

programCount++;
console.log(programCount)
fs.writeFileSync("program_count.txt", JSON.stringify(programCount));