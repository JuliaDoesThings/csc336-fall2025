import express from "express";
import cors from "cors";
//import fs from "fs";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.update("/update", async (req, res) => 
    {
        const subjectData = await fs.readFileSync("subjects.json", "utf-8");
        const data = json.parse(subjectData);
        
        const updates = req.body;
         
        for(let subject of data.subjects) 
        {
            if (subject.name === updates.select-person) 
            {
                subject.notes.push(updates.new-note)
            }
        }

        await fs.writeFileSync("subjects.json", json.stringify(data, null, 2));
        res.json(data)
    });

app.post("/api/subjects", async (req, res) => {
    const subjectData = await fs.readFileSync("subjects.json", "utf-8");
    const data = json.parse(subjectData);

    const newSubjectData = req.body;

    let newSubject = {
        "name" : newSubjectData.name,
        "lifetime" : newSubjectData.lifetime,
        "dynasty" : newSubjectData.dynasty,
        "origin" : newSubjectData.origin,
        "mother" : newSubjectData.mother,
        "father" : newSubjectData.father,
       "children" : newSubjectData.children
    }

    subjectData.push(newSubject);

    await fs.writeFileSync("subjects.json", json.stringify(data, null, 2));
    res.json(data)
})

app.get("/api/data", async (req, res) => 
{
    const subjectsString = await fs.readFileSync("subjects.json", "utf-8");
    const subjectsObject = json.parse(subjectsString);

    const sourcesString = await fs.readFileSync("sources.json", "utf-8");
    const sourcesObject = json.parse(sourcesString);

    res.json([subjectsObject, sourcesObject]);
})

//app.get("/api/data", (req, res) => {
//    console.log("hello from api endpoint /api/data!");
//    res.json({
//        something: 123456789
//    });
//});

app.listen(3000);