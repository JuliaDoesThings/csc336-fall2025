let displayDiv = document.querySelector("#big-world-div");
let submitButtons = document.querySelectorAll("submit-button");

//same code from the assignment loaded in for bug testing!
async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();

    document.getElementById("worldDiv").innerHTML =
        `<ul><li>${data.regions[0].towns[0].notable_people[0].name}</li></ul>`;
}

async function setupWorld() 
{
    console.log("called setup");
    const res = await fetch("/world");
    console.log("called await fetch")
    const data = await res.json();
    console.log("called await res")

    console.log(data)

    //document.getElementById("data").innerHTML = 
    //  `<ul><li>${data.regions[0].towns[0].notable_people[0].name}</li></ul>`


}

let changeClearanceForm = document.getElementById("change-clearance");
changeClearanceForm.addEventListener("submit", async (e) => 
    {
        e.preventDefault();

        //console.log("pushed submit");

        let formData = new FormData(changeClearanceForm);
        let dataObject = Object.fromEntries(formData.entries());
        console.log(JSON.stringify(dataObject));

        const res = await fetch("/update", 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataObject)
        });

        const updatedWorld = await res.json();

        setupWorld();
    });


setupWorld()

console.log("started");

