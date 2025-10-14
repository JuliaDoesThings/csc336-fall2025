import fs from 'fs';


let jFileData = fs.readFileSync("./world.json", "utf8");
let fileContents = JSON.parse(jFileData);

//console.log(fileContents)
//console.log("len = " + fileContents.regions.length)

for (let i = 0; i < fileContents.regions.length; i++) 
{
    //console.log("loop " + i)
    printRegion(fileContents.regions[i]);
}



function printRegion(regionData) 
{
    //console.log(regionData)
    console.log("Region: " + regionData.name);
    for (let i = 0; i < regionData.towns.length; i++) 
    {
        //console.log("inner loop" + i)
        let currentTown = regionData.towns[i];
        console.log("    City: " +  currentTown.name);
        for (let j = 0; j < currentTown.notable_people.length; j++) 
        {
            let currentPerson = currentTown.notable_people[j];
            console.log("        " + currentPerson.role + ": " + currentPerson.name + ", Clearance: " + currentPerson.items[0].clearance);
        }
    }

}